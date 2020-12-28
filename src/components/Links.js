import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class Links extends Component {
        render() {
            return (
                <div className="sm text-center text-white font-light text-lg white justify-between">
                    <Link to ='https://www.linkedin.com/in/shirlend'>LinkedIn</Link>{"      "}
                    <Link to ='https://'>Resume</Link>{"      "}
                    <Link to ='https://www.lendeta.medium.com'>Medium</Link>{"      "}
                    <Link to ='https://www.github.com/Ro5hi'>GitHub</Link>{"      "}
            </div>
            )
        }
    }

    export default Links;