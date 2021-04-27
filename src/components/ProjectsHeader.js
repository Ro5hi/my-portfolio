import React, { Component } from 'react'

    class ProjectsHeader extends Component {
        render() {
            return (
                <div className="relative inset-y-0 left-0 bottom-0 select-none">
                    <div className="text-center text-6xl text-white font-bold">
                        <p class="italic tracking-wider">
                            FEATURED <br />
                            PROJECTS <br />
                        </p>
                    </div>
                </div>
            )
        }
    } 

    export default ProjectsHeader;