import React, { useState } from 'react'
import Skills from './Skills'
import Projects from './Projects'
import './About.css'

const About = () => {

    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const toggleSkills = () =>
    {
        setShowSkills(!showSkills)
        if(showProjects)
        {
            setShowProjects(false);
        }
    }

    const toggleProjects = () =>
    {
        setShowProjects(!showProjects);
        if(showSkills)
        {
            setShowSkills(false);
        }
    }

  return (
    <div className='about'>
        <h3 className='sub-title'>About Me</h3>
        <h5>Why Choose Me ?</h5>
        <img src={require ("../../assets/About/bg-img.png")} alt=' ' className='about-img'/>
        <div className='about-container'>
            <div className='row'> 
                <div className='about-col-1'>
                    <img src={require ("../../assets/Home/profile-picture.jpg")} 
                    alt=' ' />
                </div>
                <div className='about-col-2'>
                    <p className='introduction'>I am a second-year computer science engineering 
                        student with a strong passion for using technology 
                        to make a positive impact on society. With a solid 
                        foundation in programming languages such as Python, Html, 
                        Java script and C. As an aspiring software engineer, I am always 
                        seeking new challenges and opportunities to sharpen my skills.</p>

                    <button className='btn btn-skill' onClick={toggleSkills}><span>Skills</span></button>
                    <button className='btn btn-project' onClick={toggleProjects}><span>Projects</span></button>

                    {showSkills && <Skills />}
                    {showProjects && <Projects />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About