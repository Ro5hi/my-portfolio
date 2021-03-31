import React, { Component } from 'react'
import ProjectsHeader from './ProjectsHeader'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    render() {
        return (
            <div className="overflow-auto bg-black">
                <ProjectsHeader />
                <br/><br/><br/>
                <ProjectCard 
                    img="https://imgur.com/VGGiVqP.jpg"
                    title="Mills Electrical Services"
                    body="An official website designed for an electrician based in Indiana."
                    tech="ReactJS, TailwindCSS" />
            </div>
        )
    }
}