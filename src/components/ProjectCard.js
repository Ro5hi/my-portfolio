import React from 'react'

function ProjectCard ({img, title, body, demo, tech}) {

    // const img1 = "https://imgur.com/VGGiVqP.jpg"
    // const img2 = "https://camo.githubusercontent.com/b40ee185b384c9b81545b452baf20f41b4555eee4556656f4d44fa7f27ef34aa/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323430302f312a62456837745a726536707559454e6f634133757272512e706e67"
    // const img3 = "https://github.com/Ro5hi/subtrack-js/raw/main/front/screenshots/l.PNG"
    // const img4 = "https://camo.githubusercontent.com/c6db3a7d694f05b2f4facd33971debaee17c691b18e7455ca99b8219798e2e98/68747470733a2f2f696d6775722e636f6d2f6d7971413238632e6a7067"

    // const t1 = <p>Mills Electrical Services</p>
    // const t2 = <p>Go Local</p>
    // const t3 = <p>SubTrack</p>
    // const t4 = <p>Picturesque</p>

    // const b1 = "Official website for an electrician based in Indiana."
    // const b2 = "Built for business owners to post promotions and updates."
    // const b3 = "Subscription products and services tracker."
    // const b4 = "Mock clone of Instagram."

    // const d1 = <a href="https://mills-electrical.netlify.app/">Demo</a>
    // const d2 = ""
    // const d3 = "" 
    // const d4 = ""

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
                    <button>    
                        <a href={demo}>Demo</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard