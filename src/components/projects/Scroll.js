import React, {useState} from 'react';
import data from './data';

const Scroll = () => {

const [current, setCurrent] = useState(0);
const length = slides.length;

    return (
        <>
            {data.map((scroll, index) => {
                return (
                    <div className="flex justify-center drop-shadow-lg">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="pt-6 px-7 py-4 bg-white">
                                <img className="bg-transparent" src={scroll.projectImage} alt='projecticon' key={index} />
                                <div class="font-bold text-2xl pb-2 pt-4 bg-transparent text-blue-400 mb-2">{scroll.projectName}</div>
                                    <p class="text-gray-700 text-base bg-transparent">
                                        {scroll.projectDescription}
                                    </p>
                            </div>
                            <div class="px-6 pt-4 pb-2 bg-white">
                                {scroll.projectTech}
                            </div>        
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Scroll;