import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class About extends Component {
        render() {
            return (
                <div className="relative inset-y-0 left-0">
                    <div className="text-left text-white">
                        <strong><h2>Jan 2021</h2></strong>
                        <p>
                        Available for full-time remote jobs only.
                        </p>
                        <br/>
                        <br/>
                        <strong><h3>Background</h3></strong>
                        <p>
                        A business graduate who later transitioned into a career in<br/>
                        full stack development after studying Software Engineering<br/>
                        at Flatiron School.<br/>
                        <br/>
                        Loves building friendly experiences to help local communities.<br/>
                        Enjoys bringing concepts to life through creative front-end development.<br/>
                        Strong advocate for diversity and inclusion in the tech industry.<br/>
                        Enjoys photography and creating 3D models on the weekends.<br/>
                        </p>
                    </div>
                </div>
            )
        }
    } 

    export default About;