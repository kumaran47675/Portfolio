import React,{useState,useEffect} from 'react';
import profile from '../images/sd-image.svg';
const DisplayEffect = () =>{
   const [displayText,setDisplayText]=useState("");
   const [value,setValue]=useState(["Full Stack Developer","DevOps Engineer"]);
   const [index,setIndex]=useState(0);
   const [stringIndex,setStringIndex]=useState(0);
   useEffect(()=>{
    if(value[index].length>stringIndex)
    {
        setTimeout(()=>{
            setDisplayText(displayText+value[index][stringIndex]);
            setStringIndex(stringIndex+1);
        },250)
        
        
    }
    else
    {
        setTimeout(()=>{
        setIndex((index+1)%value.length);
        setStringIndex(1);
        setDisplayText(value[(index+1)%value.length][0])},250)
        

       
    }
   
   },[stringIndex,index]);
   return <h1 id="display-text">{displayText}</h1>

   
}
const Introduction = () =>{
    return(
    

        <div id="introduction" className='container intro-section '>
            <div className="row mb-4 g-4 align-items-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>Hi, I am Kumaran</h1>
                    <DisplayEffect/>
                    <p> 
                       I am a final year student currently pursuing Computer science in VIT Chennai
                    </p>
                        <a href="https://github.com/kumaran47675" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="bi bi-github" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
                        </a>
                        <a href="https://linkedin.com/in/kumaran-raja-838476275" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <i className="bi bi-linkedin" style={{ fontSize: "2rem", color: 'goldenrod' }}></i>
                        </a>
                        <a href="https://x.com/rathika_ra75586" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="bi bi-twitter" style={{ fontSize: "2rem", color:'goldenrod' }}></i>
                        </a>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img src={profile} alt="profile-img" className="card-img-top img-fluid" />
                </div>
            </div>
        </div>
    
    );
}
export default Introduction;