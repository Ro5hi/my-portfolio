import React, { Component } from 'react'
import Intro from './Intro'
import Footer from './Footer'
import ProjectsHeader from './ProjectsHeader'

    class Home extends Component {
        render() {
            return (
                <div className="bg-black sm text-white text-center font-light ">
                    <Intro />
                    <ProjectsHeader />
                    <Footer />
                </div>

            )
        }
    } 

    export default Home;