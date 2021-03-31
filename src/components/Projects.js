import React, { Component } from 'react'
import ProjectsHeader from './ProjectsHeader'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />

    return (
        <div className="overflow-auto">
            <ProjectsHeader />
            <br/><br/><br/>
            <ProjectCard 
                img="https://imgur.com/VGGiVqP.jpg"
                title="Mills Electrical Services"
                body="An official website designed for an electrician based in Indiana."
                tech= {ReactJS} />
        </div>
    )
}

export default Projects