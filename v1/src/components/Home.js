import Intro from './Intro'
import Footer from './Footer'
import Projects from './Projects'

    const Home = () => {
        return (
            <div className="flex-initial flex-col p-8 font-light">
                <div className="">
                    <Intro />
                    <Projects />
                <div className="pt-12 pb-4">
                    <Footer />
                </div>
                </div>
            </div>
        )
    } 

    export default Home;