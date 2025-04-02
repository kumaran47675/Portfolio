import { motion } from "framer-motion";
import ml from '../images/ML-Intrusion.jpg'
import devops from '../images/CI-CD.webp'
import phc from '../images/Artificial-Intelligence-in-Healthcare.jpg'
import at from '../images/Attendance-Tracker.png'
const Project = () => {
    
  return(
    <div id="project" className="container project-section">
        <div className="row project-title  mb-4 ">
            <div className="col">
                <h1>My Projects</h1>
            </div>
        </div>
        <motion.div className="row project-body mb-4 g-4" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
           <div className="col-sm-12 col-lg-6  ">
               <div className="card p-3">
                  <img src={ml} alt="ml-intrusion" className="img-fluid card-top-img"/>
                   <div className="card-body">  
                        <h1 className="card-title">
                        Intrusion detection in Wireless Sensor Network using machine
                        learning
                        </h1>
                        <p className="card-text">
                        Working on finding intrusion detection in wireless sensor network without any
                        human intervention using various classification based supervised machine
                        learning algorithms
                        </p>
                   </div>
               </div>
           </div>
   
           <div className="col-sm-12 col-lg-6 ">
                <div className="card p-3">
                <img src={devops} alt="devops" className="img-fluid card-top-img"/>
                   <div className="card-body">
                        <h1 className="card-title">
                        End-to-End CI/CD Pipeline with Kubernetes and Microservices
                        Architecture
                        </h1>
                        <p className="card-text">
                        Built a scalable CI/CD pipeline to deploy microservices on Kubernetes,
                        automating builds, testing, and deployments using Jenkins and Docker.
                        Provisioned infrastructure with Terraform and implemented monitoring,
                        logging, and security measures to ensure high availability and compliance
                        </p>
                   </div>
               </div>

            </div>
       
        </motion.div>
        <motion.div className="row project-body mb-4 g-4" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
            <div className="col-sm-12 col-lg-6 ">
               <div className="card p-3">
               <img src={phc} alt="ai-healthcare" className="img-fluid card-top-img"/>
                    <div className="card-body">
                            <h1 className="card-title">
                                 Personal Health Advisor
                            </h1>
                            <p className="card-text">
                            A machine learning algorithm processes user vitals to analyse and predict the
                            cardiovascular health and mental health of the user. Subsequently, a voice
                            assistant, employing natural language processing (NLP), delivers personalized
                            advice based on the analysis.

                            </p>
                    </div>
               </div>

           </div>
           <div className="col-sm-12 col-lg-6 ">
               <div className="card p-3">
               <img src={at} alt="attendance-tracker" className="img-fluid card-top-img"/>
                   <div className="card-body">
                        <h1 className="card-title">
                        Student Attendance Tracker Android App
                        </h1>
                        <p className="card-text">
                        An app that explores the various features available in React native to get a set
                        of inputs from the user and display it in a structured manner. Google Firebase is
                        used for backend purposes.
                        </p>
                   </div>
               </div>

            </div>


        </motion.div>
       
           <br />
           <br />
        

    </div>
  );
};
export default Project;