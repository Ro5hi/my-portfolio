import React, { useState } from 'react';
import data from './ProjectsData';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';


const Scroll = ({ slides }) => {

const [current, setCurrent] = useState(0);
const length = slides.length;
const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
}
const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
}

if(!Array.isArray(slides) || slides.length === 0) {
    return null
}

    return (
        <section className="slider">
            <faCaretSquareLeft className="absolute pt-1/2 color-black cursor-pointer select-none" onClick={prevSlide} />
            <faCaretSquareRight className="absolute pt-1/2 color-black cursor-pointer select-none" onClick={nextSlide} />
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
        </section>
    )
}

export default Scroll;