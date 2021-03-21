import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animted } from 'react-spring'

const Modal = () => {

    const poppedUp = useRef()
    
    const [isUp, setUp] = useState(false)

    const handleClick = event => {
        if (poppedUp.current.contains(event.target)) {
            return
        }
        setUp(false)
    }

    const ModalContent = () => {
        <div className="text-left text-s tracking-wide text-white">
            <button onClick={() => setUp(!isUp)}>Read More</button>
            {isUp ? (
                <div>
                    <p>
                    A business graduate who later transitioned into a career in<br/>
                    full stack development after studying Software Engineering<br/>
                    at Flatiron School. Always curious and ready to learn.<br/>
                    <br/>
                    Loves building friendly experiences to help local communities.<br/>
                    Enjoys bringing creative concepts to life with front-end development.<br/>
                    Does photography and creating 3D models on the weekends.<br/>
                    </p>
                </div>
            ) : null }
        </div>     
    }

    const CloseFunction = e => {
            if (poppedUp.current === e.target) {
                setUp(false)
            }
        }

    const CloseButton = () => {
        <div className="absolute cursor-pointer p-0 items-end text-2xl">
            <div className="text 2xl" f={CloseFunction}>X</div>
        </div> 
    }

   

    const ModalWrapper = () => {
        <div className="bg-white relative tracking-widest flex items-center">
            <CloseButton / >
            <ModalContent />
        </div>
    }

    return (
        <div>
            
        </div>
    )
}


export default Modal;