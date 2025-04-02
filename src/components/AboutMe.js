import { motion } from "framer-motion";
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
                        <img src="python.png" alt="python symbol" /> Python
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="c++.png" alt="c++ symbol" /> C++
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="java.png" alt="java symbol" /> Java
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="ruby.png" alt="ruby symbol" />Ruby
                        </div>
                     </div>
                </div>
                
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
               
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="js.png" alt="js symbol" /> Javascript
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="html.png" alt="html symbol" /> HTML
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="css.png" alt="css symbol" /> CSS
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="react-native.png" alt="react-native symbol" />React Native
                        </div>
                     </div>
                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="react.png" alt="react symbol" /> React JS
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="node-js.png" alt="node symbol" /> Node JS
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="docker.png" alt="docker symbol" /> Docker
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="kubernetes.png" alt="kubernetes symbol" /> Kubernetes
                        </div>
                     </div>

                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="aws.png" alt="aws symbol" />  AWS
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="jenkins.png" alt="jenkins symbol" /> Jenkins
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="git.png" alt="git symbol" /> GIT
                        </div>
                     </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="mysql.png" alt="mysql symbol" /> MySQL
                        </div>
                     </div>

                </div>
            </motion.div>
            <motion.div className="row mb-4 g-4 technology-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="postgresql.png" alt="postgresql symbol" />PostgreSQL
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card">
                        <div className="card-body">
                        <img src="tensorflow.png" alt="tensorflow symbol" /> Tensorflow
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