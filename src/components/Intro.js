import React, { Component } from 'react'
import IntroHeader from './IntroHeader'
import { Link } from 'react-router-dom'

    class Intro extends Component {
        render() {
            return (
                <div className="relative inset-y-0 left-0">
                <IntroHeader />
                    <div className="text-left text-white">
                        <p>
                        My name is <strong>Shirlen</strong>!<br />
                        I’m a full stack engineer<br />
                        based in Colorado.
                        </p>
                    </div>
                    <div className="text-left text-white">
                        <Link to ='/about'>Read more about me</Link>
                    </div>
                </div>
            )
        }
    } 

    export default Intro;