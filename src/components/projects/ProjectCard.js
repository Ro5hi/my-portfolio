import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'


const ProjectCard = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />
    const Python = <FontAwesomeIcon icon={faPython} size="lg" />
    const JavaScript = <FontAwesomeIcon icon={faJsSquare} size="lg" />

    return (
        <div className="mx-auto overflow-auto">

        </div>
    )
}

export default ProjectCard