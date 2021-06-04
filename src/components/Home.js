import Intro from './Intro'
import Footer from './Footer'
import Projects from './Projects'

    const Home = () => {
        return (
            <div className="flex-initial flex-col p-8 font-light">
                <div className="pb-4">
                    <Intro />
                    <Projects />
                    <Footer />
                </div>
            </div>
        )
    } 

    export default Home;