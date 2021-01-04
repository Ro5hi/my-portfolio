import React, { Component } from 'react'
import Contact from './Contact'

export default class Footer extends Component {
    render() {
        return (
            <div className="text-left text-s text-white font-thin justify-between">
                <p class="tracking-tighter">
                Designed by Shirlen Detablan<br/>
                © 2021 All Rights Reserved<br/>
                </p>
                <div>
                    <Contact />                
                </div>
            </div>
        )
    }
}
