import React from 'react'

function ProjectCard ({img, title, body, demo, tech}) {

    return (
        <div className="max-w-sm rounded overflow-hidden md:flex-wrap sm:flex-wrap xs:flex-wrap">
            <div className="bg-white align-center">
            <img src={img} alt="img"></img>
            </div>
            <div className="bg-blue-500 font-bold text-white px-6 py-4 align-top xl:text-lg lg:text-xs md:text-xs sm:text-xs xs:text-xs">
                {title}
                <div className="bg-blue-500 text-s font-thin text-white tracking-wide">
                    {body}
                </div>
                <div className="inline-block text-white bg-gray rounded-none px-1 py-1 text-sm font-semibold mr-2">
                    {tech}
                </div>
                <div className="cursor-pointer inline-block text-white bg-gray rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    <button className="hover:text-yellow-400">    
                        <a href={demo}>Demo</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard