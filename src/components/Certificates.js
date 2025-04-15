import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import devtown from '../images/devtown.png';
import nptel from '../images/nptel.png'
import udemy from '../images/udemy.png'
import coursera from '../images/coursera.svg'
const Certificates = () =>{
return(

    <div  id="certificates" className="container certificate-section">
        <div className="row mb-4 g-4 certificate-title">
               <div className="col">
                   <h1> Certifications</h1>
               </div>
        </div>
        <motion.div className="row mb-4 g-4 certificate-body" initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}} viewport={{once:false,amount:0.25}}>
            <div className="col-sm-6 col-lg-3">
               <Card >
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-center'><h4>Data Scientist Course</h4></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           <a href="https://www.devtown.in/course/Data-Science-Industrial-Training-Program" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <img src={devtown} alt="devtown" className='img-fluid fixed-img' />
                           </a>
                        </Card.Subtitle>
                        <Card.Text>
                        Mastered the craft of analysing and wrangling data, applying it adeptly across a
                        spectrum of machine learning and deep learning models.
                        </Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1ClIhOS_4U7mCFn_C7JqBuDdkZh1CVOcB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: 'goldenrod' }} >Certificate</Card.Link>
                    </Card.Body>
                </Card>
               
            </div>
            <div className="col-sm-6 col-lg-3">
               <Card >
                    <Card.Body>
                    <Card.Title className='d-flex justify-content-center'><h4>Ethical Hacking</h4></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           <a href="https://onlinecourses.nptel.ac.in/noc22_cs13/preview" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <img src={nptel} alt="nptel" className='img-fluid fixed-img' />
                           </a>
                           
                        </Card.Subtitle>
                        <Card.Text>
                        Learned comprehensive skills in ethical hacking methodologies. The course
                        focused on identifying and addressing cybersecurity vulnerabilities.
                        </Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1n9q3bKy9RivRjbzoGk3VXZC8HvjsptKz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: 'goldenrod' }}>Certificate</Card.Link>
                    </Card.Body>
                </Card>
               
            </div>
            <div className="col-sm-6 col-lg-3">
               <Card>
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-center'><h4>Devops</h4></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           <a href="https://www.udemy.com/course/devopsprojects/" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <img src={udemy} alt="udemy" className='img-fluid fixed-img' />
                           </a>
                          
                        </Card.Subtitle>
                        <Card.Text>
                        I gained expertise in DevOps practices ranging from foundational concepts to
                        advanced techniques. This included CI/CD pipelines, infrastructure automation,
                        Docker containerization, and cloud deployment, reinforced by hands-on project
                        experience.
                        </Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1CiGV9pDFHog0X9WUncSouMGCXqhqAksH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: 'goldenrod' }}>Certificate </Card.Link>
                    </Card.Body>
                </Card>
               
            </div>
            <div className="col-sm-6 col-lg-3">
               <Card >
                    <Card.Body>
                    <Card.Title className='d-flex justify-content-center'><h4>Meta Front-End Developer Professional Certificate</h4></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                           <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <img id="coursera" src={coursera} alt="nptel" className='img-fluid fixed-img' />
                           </a>
                            
                        </Card.Subtitle>
                        <Card.Text>
                          I learned to build responsive websites using HTML, CSS, and JavaScript, adding interactivity with React. 
                          I used Bootstrap for styling and GitHub for version control. 
                          I also prepared for coding interviews by solving problems and creating portfolio-ready projects.
                        </Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1M9oeblYun99SV6pZBAeoSurDNgviC7MV/view" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: 'goldenrod' }}>Certificate </Card.Link>
                    </Card.Body>
                </Card>
               
            </div>

        </motion.div>
        <br />
        <br />

    </div>
    
)};
export default Certificates;