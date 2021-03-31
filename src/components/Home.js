import Intro from './Intro'
import Footer from './Footer'
import Projects from './Projects'

    const Home = () => {
        return (
            <div className="flex-initial flex-col p-8 font-light ">
                <Intro />
                    <br/><br/><br/>
                        <Projects />
                    <br/><br/><br/>
                <div className="sm text-white text-center font-light">
                    <Footer />
                </div>
            </div>
        )
    } 

    export default Home;