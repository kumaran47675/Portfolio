import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
const WorkExperience = () => {
  return (
    <Container id="workexp" className="mt-4" >
      <h1 className=" mb-4">Work Experience</h1>
      <motion.ul className="timeline" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
        <li>
          <div className="timeline-content">
            <h3>Full Stack Engineer Intern</h3>
            <h5>Nippon Paint (India) Pvt | Chennai (08/2023 - 11/2023)</h5>
            <p>Built interactive and responsive UIs using ReactJS and Ant Design for a better user experience. I enhanced server-side functionality with .NET Core and optimized database management with PostgreSQL. My work improved performance, efficiency, and UI design in web applications.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3>Software Engineer Intern</h3>
            <h5> Nomadia (India) Pvt Ltd. | Chennai (09/2023 - 01/2024)</h5>
            <p>Fixed bugs in Redmine (Ruby on Rails) to improve functionality and created a Docker Compose setup for easier testing and deployment. I also ensured clear documentation for future maintenance.</p>
          </div>
        </li>
      </motion.ul>
      <br />
      <br />

    </Container>
  );
};

export default WorkExperience;
