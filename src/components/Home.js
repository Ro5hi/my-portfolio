import React from 'react'
import AboutMe from '../components/about'
import Footer from '../components/footer'
import Scroll from './projects/Scroll'

export default function Home() {
    return (
        <>
            <AboutMe />
            <Scroll />
            <Footer />
        </>
    )
}
