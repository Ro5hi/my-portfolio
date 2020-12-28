import React, { Component } from 'react'

    class Links extends Component {
        render() {
            return (
                <div className="sm text-center text-white font-light text-2xl justify-between">
                    <p class="tracking-widest">
                        <a href='https://www.linkedin.com/in/shirlend'>LinkedIn</a>{"      "}
                        <a href ='https://'>Resume</a>{"      "}
                        <a href ='https://www.lendeta.medium.com'>Medium</a>{"      "}
                        <a href ='https://www.github.com/Ro5hi'>GitHub</a>{"      "}
                        <br/>
                    </p>
                    <div className="content-center justify-between">
                        <svg width="1820" height="4" viewBox="0 0 376 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.00271002" y1="1" x2="475.001" y2="2.01626" stroke="#FF4085" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            )
        }
    }

    export default Links;