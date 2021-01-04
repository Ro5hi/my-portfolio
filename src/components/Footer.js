import React, { Component } from 'react'
import Contact from './Contact'
import Links from './Links'
export default class Footer extends Component {
    render() {
        return (
            <div className="flex flex-nowrap text-left text-s text-white font-thin justify-between">
                <p class="tracking-tighter">
                © 2021 Shirlen Detablan
                </p>
                    <Links />
                    <Contact />                
            </div>
        )
    }
}
