import ProjectsHeader from './ProjectsHeader'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
// import { faJavascript} from '@fortawesome/free-brands-svg-icons'


const Projects = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />
    // const JavaScript = <FontAwesomeIcon icon={faJavascript} size="lg" />

    return (
        <div className="overflow-auto">
            <ProjectsHeader />
            <br/><br/><br/>
        <div className="grid grid-rows-3 grid-flow-col gap-6">
            <ProjectCard 
                img="https://imgur.com/VGGiVqP.jpg"
                title="Mills Electrical Services"
                body="An official website designed for an electrician operating at Muncie, Indiana. Designed with TailWindCSS. Featuring smooth-scroll for easy navigation."
                demo = "https://mills-electrical.netlify.app/"
                tech= {ReactJS} />
            <ProjectCard 
                img="https://camo.githubusercontent.com/b40ee185b384c9b81545b452baf20f41b4555eee4556656f4d44fa7f27ef34aa/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323430302f312a62456837745a726536707559454e6f634133757272512e706e67"
                title="Go Local"
                body="Async web-app developed for business owners to post updates and promotions. Includes user authentication made possible with Ruby on Rails running as a RESTFUL API. PostgreSQL database to store user activity and registered account information. Redux used as a state management. Plugins include styled-components for CSS styling."
                demo = ""
                tech= {ReactJS} />
            </div>
        </div>
    )
}

export default Projects