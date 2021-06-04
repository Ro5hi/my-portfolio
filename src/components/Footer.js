import React, { Component } from 'react'
import Contact from './Contact'
import Links from './Links'
export default class Footer extends Component {
    render() {
        return (
            <div className="justify-items-center place-items-center select-none flex justify-center items-center h-16">
                <p class="tracking-tighter text-center text-lg text-white">
                © 2021 Shirlen Detablan
                </p>
                    <Links />
                    <Contact />                
            </div>
        )
    }
}
