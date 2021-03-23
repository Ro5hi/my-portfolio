import React, { useEffect, useRef } from 'react'
import Intro from './Intro'
import Footer from './Footer'
import Projects from './Projects'

    const Home = () => {
        return (
            <div className="flex-initial flex-col p-8 sm text-white text-center font-light ">
                <Intro />
                    <br/><br/><br/>
                        <Projects />
                    <br/><br/><br/>
                <Footer />
            </div>
        )
    } 

    export default Home;