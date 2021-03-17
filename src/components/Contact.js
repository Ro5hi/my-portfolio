import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class Contact extends Component { 
        render() {
            return (
                <div className="animate-bounce text-s text-right text-white font-thin justify-between">
                    <p class="tracking-tighter">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=slen.detablan@gmail.com" target="_blank">Let's Work Together</a>
                    </p>
                </div>
            )
        }
    }

    export default Contact;