import ProjectsHeader from './ProjectsHeader'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare} from '@fortawesome/free-brands-svg-icons'


const Projects = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />
    const JavaScript = <FontAwesomeIcon icon={faJsSquare} size="lg" />

    return (
        <div className="overflow-auto">
            <ProjectsHeader />
            <br/><br/><br/>
            <div className="justify-center grid grid-rows-2 grid-flow-col gap-12">
                <ProjectCard 
                    img="https://imgur.com/VGGiVqP.jpg"
                    title="Mills Electrical Services"
                    body="An official website built, developed, and designed for an electrician operating at Muncie, Indiana. Designed with TailWindCSS. Featuring a dynamic navigation with an on-click smooth-scroll for accessibility. Logo designed for Samuel Mills, transitions between light-mode and dark-mode."
                    demo = "https://mills-electrical.netlify.app/"
                    tech= {ReactJS} />
                <ProjectCard 
                    img="https://camo.githubusercontent.com/b40ee185b384c9b81545b452baf20f41b4555eee4556656f4d44fa7f27ef34aa/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323430302f312a62456837745a726536707559454e6f634133757272512e706e67"
                    title="Go Local"
                    body="Async web-app developed for business owners to post updates and promotions. Includes user authentication made possible with Ruby on Rails running as a RESTFUL API. PostgreSQL database to store user activity and registered account information. Redux used as a state management. Styled with CSS."
                    demo = "https://www.youtube.com/watch?v=tpAwqA5TOxc"
                    tech= {ReactJS} />
                <ProjectCard 
                    img="https://github.com/Ro5hi/subtrack-js/raw/main/front/screenshots/l.PNG"
                    title="SubTrack"
                    body="Async Javascript web-app allowing users to keep track of their product or service subscriptions. Coded following JavaScript ES2016 syntax principles. Features included are search filtering, dark mode for accessibility, and an easy user interface. Using Ruby on Rails as a RESTFUL API to store saved subscriptions."
                    demo = "https://www.youtube.com/watch?v=UwgB5AQVocM&t=1s"
                    tech= {JavaScript} />
                <ProjectCard 
                    img="https://camo.githubusercontent.com/c6db3a7d694f05b2f4facd33971debaee17c691b18e7455ca99b8219798e2e98/68747470733a2f2f696d6775722e636f6d2f6d7971413238632e6a7067"
                    title="Picturesque"
                    body="Mock Instagram clone enabling users to register using a Twitter account. SQLite database to store account information, posts activity, comments activity, and image uploads. Carrierwave acting as an image uploader. Devise gem used for user authentication and account passwords are hashed using the Bcrypt gem."
                    demo = "https://www.youtube.com/watch?v=nvMnJA_dJGY&t=148s"
                    tech= "Ruby on Rails" />
            </div>
        </div>
    )
}

export default Projects