import React, { Component } from 'react'
import Intro from './Intro'
import Footer from './Footer'
import ProjectsHeader from './ProjectsHeader'
import Projects from './Projects'

    class Home extends Component {
        render() {
            return (
                <div className="bg-black sm text-white text-center font-light ">
                    <Intro />
                        <ProjectsHeader />
                        <Projects />
                    <Footer />
                </div>

            )
        }
    } 

    export default Home;