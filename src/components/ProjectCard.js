import React from 'react'

function ProjectCard ({img, title, body, tech}) {

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
        <div className="h-3/6 w-6/12 bg-white">
            <div className="align-center max-w-sm rounded overflow-hidden">
            <img src={img} alt="img"></img>
            </div>
            <div className="bg-white px-6 py-4 align-top">
                {title}
                <ul>
                    <p class="text-s tracking-wide">{body}</p>
                    <p class="tracking-wide"><strong>Built with:</strong> {tech}</p>
                    <div className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        <button>    
                            <a href="https://mills-electrical.netlify.app/">Demo</a>
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard