import React, { useState, useEffect, useRef } from 'react'
import IntroHeader from './IntroHeader'
import { Link } from 'react-router-dom'


    const Intro = () => {

        const poppedUp = useRef()
        
        const [isUp, setUp] = useState(false)
        const handleClick = event => {
            if (poppedUp.current.contains(event.target)) {
                return
            }
            setUp(false)
        }
            

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
                            <button onClick={() => setUp(!isUp)}>Read More</button>
                            {isUp ? (
                                <div>
                                    A business graduate who later transitioned into a career in<br/>
                                    full stack development after studying Software Engineering<br/>
                                    at Flatiron School. Always curious and ready to learn.<br/>
                                    <br/>
                                    Loves building friendly experiences to help local communities.<br/>
                                    Enjoys bringing creative concepts to life with front-end development.<br/>
                                    Does photography and creating 3D models on the weekends.<br/>
                                </div>
                            ) : null }
                            
                        </p>
                    </div>
                </div>
            )
        }

    export default Intro;