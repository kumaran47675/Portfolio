import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Introduction from './components/Introduction';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
    
     <Header/>
     
      <Introduction/>
     <AboutMe/>
     <Certificates/>
     <WorkExperience/>
     <Project/>
     <Contact/>
   
     
    </div>
  );
}

export default App;
