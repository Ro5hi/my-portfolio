import React, { Component } from 'react'
import IntroHeader from './IntroHeader'
import { Link } from 'react-router-dom'

    class Intro extends Component {
        render() {
            return (
                <div className="relative inset-y-0 left-0">
                <IntroHeader />
                <br/><br/>
                    <div className="text-left tracking-widest text-2xl text-white">
                        <p>
                        My name is <strong>Shirlen</strong>!<br />
                        I’m a full stack developer<br />
                        based in Colorado.
                        </p>
                    </div>
                    <div className="text-left text-s tracking-wide text-white">
                        <p class="underline">
                            <Link to ='/about'>Read more about me</Link>
                        </p>
                    </div>
                </div>
            )
        }
    } 

    export default Intro;