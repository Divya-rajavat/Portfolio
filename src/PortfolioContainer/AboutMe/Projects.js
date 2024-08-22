import React from 'react'
import './Project.css'

const Projects = () => {
    const projects = [
        {
            title : 'Instant  Resume Builder',
            description : 'Frontend website using react where, you can build your Resume',
            url : "https://divya-rajavat.github.io/Instant-Resume-Builder/"
        },
        {
            title : 'Gold Price Prediction',
            description : 'Website for predicting gold price using ML and Django'
        }
    ]
  return (
    <div className='project-container'>
        <ul>
            {projects.map((project,index)=>
            (
                <li key={index}>
                    <h4>{project.title}</h4>
                    <p className='project-info'>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Projects