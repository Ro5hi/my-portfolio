import React, { useState } from 'react';
import { ProjectsData } from './ProjectsData';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Scroll = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
        <section className="slider">
            <FontAwesomeIcon icon={faCaretSquareLeft} size="lg" className="absolute color-white cursor-pointer select-none" onClick={prevSlide} />
            <FontAwesomeIcon icon={faCaretSquareRight} size="lg" className="absolute color-white cursor-pointer select-none" onClick={nextSlide} />
            {ProjectsData.map((slide, index) => {
                return (
                    <div className={index === current ? 'active slide' : 'slide'} key={index}>
                        <div className={index === current ? 'active slide' : 'slide'} key={index}>
                            {index === current && (
                                <div className="flex justify-center drop-shadow-lg">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                        <div class="pt-6 px-7 py-4 bg-white">
                                            <img className="bg-transparent" src={slide.projectImage} alt='projecticon' key={index} />
                                            <div class="font-bold text-2xl pb-2 pt-4 bg-transparent text-blue-400 mb-2">{slide.projectName}</div>
                                                <p class="text-gray-700 text-base bg-transparent">
                                                    {slide.projectDescription}
                                                </p>
                                        </div>
                                        <div class="px-6 pt-4 pb-2 bg-white">
                                            {slide.projectTech}
                                        </div>        
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Scroll;