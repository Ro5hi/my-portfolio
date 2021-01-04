import React, { Component } from 'react'
import Contact from './Contact'

export default class Footer extends Component {
    render() {
        return (
            <div className="sm text-center text-white font-light text-2xl justify-between">
                <Contact />                
            </div>
        )
    }
}
