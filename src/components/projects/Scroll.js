import React from 'react';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

const Scroll = () => {

    const ReactJS = <FontAwesomeIcon icon={faReact} size="lg" />
    const Python = <FontAwesomeIcon icon={faPython} size="lg" />
    const JavaScript = <FontAwesomeIcon icon={faJsSquare} size="lg" />


    return (
        <>
            {data.map((scroll, index) => {
                return (
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl bg-transparent text-blue-400 mb-2">{scroll.projectName}</div>
                            <img src={scroll.projectImage} alt='projecticon' key={index} />
                            <p class="text-gray-700 text-base bg-transparent">
                                {scroll.projectDescription}
                            </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 bg-white">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                    </div>        
                </div>
                )
            })}
        </>
    )
}

export default Scroll;