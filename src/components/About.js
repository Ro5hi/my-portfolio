import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class About extends Component {
        render() {
            return (
                <div className="relative inset-y-0 left-0">
                <IntroHeader />
                    <div className="text-left text-white">
                        <p>
                        A BSBA graduate who later transitioned into a career in full stack development<br/>
                        after studying Software Engineering at Flatiron School.<br/>
                        Enjoys photography and 3D development on the weekends.<br/>
                        </p>
                    </div>
                </div>
            )
        }
    } 

    export default About;