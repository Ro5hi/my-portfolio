import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class Contact extends Component { 
        render() {
            return (
                <div className="sm text-center text-white font-light justify-between">
                    <p class="tracking-widest">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=slen.detablan@gmail.com" target="_blank">Contact Me</a>
                    </p>
                </div>
            )
        }
    }

    export default Contact;