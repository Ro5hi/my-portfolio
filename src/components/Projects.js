import React, { Component } from 'react'
import ProjectsHeader from './ProjectsHeader'

export default class Projects extends Component {
    render() {
        return (
            <div className="overflow-auto">
                <ProjectsHeader />
                <br/><br/><br/>
                <section class="justify-center">
                    <p class="rounded mb-20 shadow">
                        <img class="mx-auto" src="https://imgur.com/VGGiVqP.jpg" alt="mills"></img>
                    </p>
                    <p class="rounded mb-20 shadow">
                        <img class="mx-auto" src="https://github.com/Ro5hi/subtrack-js/raw/main/front/screenshots/l.PNG" alt="subtrack"></img>
                    </p>
                    <p class="rounded mb-20 shadow">
                        <img class="mx-auto" src="https://camo.githubusercontent.com/c6db3a7d694f05b2f4facd33971debaee17c691b18e7455ca99b8219798e2e98/68747470733a2f2f696d6775722e636f6d2f6d7971413238632e6a7067" alt="picturesque"></img>
                    </p>
                    <p class="rounded mb-20 shadow">
                        <img class="mx-auto" src="https://camo.githubusercontent.com/b40ee185b384c9b81545b452baf20f41b4555eee4556656f4d44fa7f27ef34aa/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323430302f312a62456837745a726536707559454e6f634133757272512e706e67" alt="go local"></img>
                    </p>
                </section>
            </div>
        )
    }
}