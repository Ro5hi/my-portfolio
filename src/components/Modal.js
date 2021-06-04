import React, { useRef, useCallback, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Modal = ({ showModal, setModal }) => {

    const modalRef = useRef()

    const closeModal = event => {
        if (modalRef.current === event.target) {
            setModal(false)
        }
    }

    const animation = useSpring({
        config: {
          duration: 500
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-80%)`
    });

    const onKeyPress = useCallback(
        event => {
            if (event.key === 'Escape' && showModal) {
                setModal(false)
            }
        },
        [setModal, showModal]
    )
    useEffect(
        () => {
            document.addEventListener('keydown', onKeyPress)
            return () => document.removeEventListener('keydown', onKeyPress)
        },
        [onKeyPress]
    )

    return (
        <>
            {showModal ? (
                <div className="bg-black sticky justify-center items-center" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                    <div className="relative " showModal={showModal}>
                        <div className="relative pt-4 inset-y-0 left-8 select-none tracking-widest text-left text-s text-white">
                            <p>
                            I am a business graduate who transitioned into a career in<br/>
                            Software Engineering after studying at Flatiron School.<br/>
                            Adaptable, curious, and committed to learn new concepts.<br/>
                            <br/>
                            I enjoy bringing creative concepts to life with front-end development.<br/>
                            You can find me doing photography and Blender3D on the weekends.<br/>
                            </p>
                        </div>
                        <div className="fixed cursor-pointer p-0 items-end text-2xl"
                            aria-label='Exit'
                            onClick={() => setModal(prev => !prev)}
                        />
                    </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
};

export default Modal