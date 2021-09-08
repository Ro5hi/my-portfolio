import React from 'react'
import About from './About'
import Intro from './Intro'
import Links from './Links'

export default function AboutMe() {
    return (
        <div className="p-12">
            <Links />
            <Intro />
            <About />
        </div>
    )
}
