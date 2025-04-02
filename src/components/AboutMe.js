import { motion } from "framer-motion";
import python from "../images/python.png";
import cpp from "../images/c++.png";
import java from "../images/java.png";
import ruby from "../images/ruby.png";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import reactNative from "../images/react-native.png";
import react from "../images/react.png";
import node from "../images/node-js.png";
import docker from "../images/docker.png";
import kubernetes from "../images/kubernetes.png";
import aws from "../images/aws.png";
import jenkins from "../images/jenkins.png";
import git from "../images/git.png";
import mysql from "../images/mysql.png";
import postgresql from "../images/postgresql.png";
import tensorflow from "../images/tensorflow.png";

const AboutMe= () =>{
     return(
        <div id="aboutme" className="container aboutme-section">
            <div className="row mb-4 g-4  aboutme-title">
                <div className="col">

                   <h1>A bit about me</h1> 
                </div>
            </div>
            <div className="row mb-4 g-4 aboutme-body" >
                <div className="col">
                  <p>
                    I am  Eager computer science fresher with a strong passion for programming, dedicated to
                    exploring and gaining hands-on experience in the dynamic field. Committed to honing
                    skills, embracing challenges, and contributing innovative solutions. Enthusiastic about
                    continuous learning and growth within the programming domain. Seeking opportunities
                    to apply knowledge and make a meaningful impact in the tech industry
                  </p>
                    <br />
                    <br />
                </div>
            </div>
            <div className="row mb-4 g-4 technology-title" >
               <div className="col">
                      <h1>Technologies and Tools</h1>
               </div>
            </div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={python} alt="python symbol" /> Python
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={cpp} alt="c++ symbol" /> C++
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={java} alt="java symbol" /> Java
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={ruby} alt="ruby symbol" />Ruby
                        </div>
                     </div>
                </div>
                
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
               
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={js} alt="js symbol" /> Javascript
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={html} alt="html symbol" /> HTML
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={css} alt="css symbol" /> CSS
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={reactNative} alt="react-native symbol" />React Native
                        </div>
                     </div>
                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={react} alt="react symbol" /> React JS
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={node} alt="node symbol" /> Node JS
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={docker} alt="docker symbol" /> Docker
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={kubernetes} alt="kubernetes symbol" /> Kubernetes
                        </div>
                     </div>

                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={aws} alt="aws symbol" />  AWS
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={jenkins} alt="jenkins symbol" /> Jenkins
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={git} alt="git symbol" /> GIT
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={mysql} alt="mysql symbol" /> MySQL
                        </div>
                     </div>

                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={postgresql} alt="postgresql symbol" />PostgreSQL
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src={tensorflow} alt="tensorflow symbol" /> Tensorflow
                        </div>
                     </div>

                </div>
                
            </motion.div>

           <br />
           <br />
        </div>
     );
}
export default AboutMe;