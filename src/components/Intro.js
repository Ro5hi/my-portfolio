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
                    <div className="text-left tracking-widest text-2xl text-white">
                        <p>
                        My name is <strong>Shirlen</strong>!<br />
                        I’m a full stack engineer<br />
                        based in Colorado.
                        </p>
                        <button onClick={openModal}>...</button>
                    </div>
                        <Modal showModal={showModal} setModal={setModal} />
                </>
            )
        }

    export default Intro;