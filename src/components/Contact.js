import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        
        e.preventDefault();
        emailjs.send(
            'service_djmiln5',
            'template_fa5srzv',
            formData,
            'qQveN8K0RSOQVR4na'
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Email sent!');
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        })
        .catch((error) => {
            console.error('Email failed to send:', error);
        });
    };
  return(
    
    <div id="contact" className="container contact-section" >
        <div className="row mb-4 g-4 contact-title">
            <div className="col">
                 <h1>Contact</h1>
            </div>
        </div>
        <div className="row mb-4 g-4 contact-body">
            <div className="col-sm-12 col-lg-6">
                    <h4>Connect with me</h4>
                    <p>If you want to know more about my work, or if you would just
                    like to say hello, send me a message. I'd love to hear from you.
                    </p>
                    <Form onSubmit={handleSubmit} className="p-4">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name"
                                placeholder="Enter your name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="Enter your email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="message"
                                rows={4} 
                                placeholder="Enter your message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                            
                        <Button variant="primary" type="submit">
                                Submit
                        </Button>
                   </Form>
            

            </div>
            <div className="col-sm-12 col-lg-6 text-lg-end text-sm-start py-5">
                <div className="mb-4">
                    <h4>Email</h4>
                    <p>adisakthi47675@gmail.com</p>
                </div>

               
                <div className="mb-4">
                    <h4>Address</h4>
                    <p>Loganathan Nagar, Arumbakkam, Chennai - 600094</p>
                </div>

                
                <div className="mb-4">
                    <h4>Social</h4>
                    
                        <a href="https://github.com/kumaran47675" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="bi bi-github" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
                        </a>
                        <a href="https://linkedin.com/in/kumaran-raja-838476275" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <i className="bi bi-linkedin" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
                        </a>
                        <a href="https://x.com/rathika_ra75586" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="bi bi-twitter" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
                        </a>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Contact;