import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar for small and medium devices */}
      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        {/* Close Button (X) on top-right */}
        <button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
          ✖
        </button>

        {/* Social Icons */}
        <div className="social-icons">
          <Nav.Link href="https://github.com/kumaran47675" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
          </Nav.Link>
          <Nav.Link href="https://linkedin.com/in/kumaran-raja-838476275" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
          </Nav.Link>
          <Nav.Link href="https://x.com/rathika_ra75586" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
          </Nav.Link>
        </div>

        <hr />

        {/* Navigation Links */}
        <nav>
          <Nav.Link href="#introduction" style={{ color: 'goldenrod' }} onClick={toggleSidebar}>
            Introduction
          </Nav.Link>
          <Nav.Link href="#certificates" style={{ color: 'goldenrod' }} onClick={toggleSidebar}>
            Certificates
          </Nav.Link>
          <Nav.Link href="#project" style={{ color: 'goldenrod' }} onClick={toggleSidebar}>
            Project
          </Nav.Link>
          <Nav.Link href="#contact" style={{ color: 'goldenrod' }} onClick={toggleSidebar}>
            Contact
          </Nav.Link>
        </nav>
      </div>

      {/* Hamburger Menu for Small Devices */}
      <Navbar
        bg="light"
        expand="lg"
        fixed={isSticky ? 'top' : undefined}
        className={`d-flex d-lg-none ${isSticky ? 'shadow' : ''}`}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleSidebar} className="border-0">
          <i className="bi bi-list" style={{ fontSize: '2rem', color: 'goldenrod' }}></i>
        </Navbar.Toggle>
        <Navbar.Brand className="mx-auto">
          {/* Optional: Add a centered logo/title here */}
        </Navbar.Brand>
      </Navbar>

      {/* Navbar for Large Devices */}
      <Navbar bg="light" expand="lg" fixed={isSticky ? 'top' : undefined} className={`d-none d-lg-flex ${isSticky ? 'shadow' : ''}`}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://github.com/kumaran47675" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="bi bi-github" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
              </Nav.Link>
              <Nav.Link href="https://linkedin.com/in/kumaran-raja-838476275" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="bi bi-linkedin" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
              </Nav.Link>
              <Nav.Link href="https://x.com/rathika_ra75586" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="bi bi-twitter" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#introduction" style={{ color: 'goldenrod' }}>Home</Nav.Link>
              <Nav.Link href="#certificates" style={{ color: 'goldenrod' }}>Certificates</Nav.Link>
              <Nav.Link href="#project" style={{ color: 'goldenrod' }}>Project</Nav.Link>
              <Nav.Link href="#contact" style={{ color: 'goldenrod' }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Overlay to close sidebar on background click */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Header;
