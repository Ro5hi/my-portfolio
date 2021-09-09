import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'


const ProjectCard = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />
    const Python = <FontAwesomeIcon icon={faPython} size="lg" />
    const JavaScript = <FontAwesomeIcon icon={faJsSquare} size="lg" />

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl bg-transparent text-blue-400 mb-2">Title</div>
                <p class="text-gray-700 text-base bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2 bg-white">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
            </div>        
        </div>
    )
}

export default ProjectCard