import React from 'react';


var ReactJS = <img className="bg-transparent" width="75" height="75" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
var Python = <img className="bg-transparent" width="75" height="75" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

var JavaScript = <img className="bg-transparent" width="75" height="75" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />


const ProjectsData = 
[
    {
        projectName: 'Lilibot',
        projectDescription: 'Discord chat bot for a Twitch streamer and her community.',
        projectImage: 'https://imgur.com/1Q2l9En.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{Python}</div>,
    }
]

export default ProjectsData;