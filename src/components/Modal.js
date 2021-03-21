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
          duration: 600
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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
                        <div className="tracking-widest text-left text-s text-white">
                            <p>
                            A business graduate who later transitioned into a career in<br/>
                            full stack development after studying Software Engineering<br/>
                            at Flatiron School. Always curious and ready to learn.<br/>
                            <br/>
                            Enjoys bringing creative concepts to life with front-end development.<br/>
                            Does photography and creating 3D models on the weekends.<br/>
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