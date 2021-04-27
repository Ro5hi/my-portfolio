import React, { useState } from 'react'
import IntroHeader from './IntroHeader'
import Modal from './Modal.js'


    const Intro = () => {

        const [showModal, setModal] = useState(false)

        const openModal = () => {
            setModal(prev => !prev)
        }

        return (
                <>
                <IntroHeader />
                <br/><br/>
                    <div className="relative inset-y-0 left-6 select-none text-left tracking-widest text-2xl text-white">
                        <p>
                        My name is <strong>Shirlen</strong>!<br />
                        I’m a full stack engineer<br />
                        based in Colorado.
                        </p>
                        <button 
                            className="text-2xl 
                            hover:text-yellow-400"
                            onClick={openModal}>
                            About Me
                        </button>
                    </div>
                        <Modal showModal={showModal} setModal={setModal} />
                </>
            )
        }

    export default Intro;