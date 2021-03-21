import React, { useState, useEffect, useRef } from 'react'
import IntroHeader from './IntroHeader'
import Modal from './Modal'
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
                    <Modal />
                </div>
            )
        }

    export default Intro;