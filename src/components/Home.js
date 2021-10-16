import React from 'react'
import AboutMe from '../components/about'
import Footer from '../components/footer'
import Scroll from './projects/Scroll'
import { ProjectsData } from './projects/ProjectsData'

export default function Home() {
    return (
        <>
            <AboutMe />
            <Scroll slides={ProjectsData} />
            <Footer />
        </>
    )
}
