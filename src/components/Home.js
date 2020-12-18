import React, { Component } from 'react'
import Intro from './Intro'
import Links from './Links'
import Contact from './Contact'

    class Home extends Component {
        render() {
            return (
                <div className="bg-black sm text-white text-center font-light ">
                    <Intro />
                    <Links />
                    <Contact />
                </div>

            )
        }
    } 

    export default Home;