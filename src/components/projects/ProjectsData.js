import React from 'react';


var ReactJS = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
var Python = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
var JavaScript = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
var Rails = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
var Ruby = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
var Redux = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
var Flask = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
var Postgresql = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
var SQL = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://img.icons8.com/fluency/48/000000/database.png" />
var Sass = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
// var Tailwindcss = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
var CSharp = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
// var Figma = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
var Unity = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
var CSS = <img className="bg-transparent" width="75" height="75" alt="tech"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
// var Git = <img className="bg-transparent" width="75" height="75" alt="tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

const ProjectsData = 
[
    {
        projectName: 'Lilibot',
        projectDescription: 'Discord chat bot for a Twitch streamer and her community.',
        projectImage: 'https://imgur.com/1Q2l9En.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{Python} {Flask}</div>,
    },
    {
        projectName: 'Go Local',
        projectDescription: 'A social portal for small business owners to inform nearby locals of their products and services.',
        projectImage: 'https://imgur.com/4ZOqdn6.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{ReactJS} {Redux} {Rails} {Postgresql} {CSS}</div>,  
    },
    {
        projectName: 'SubTrack',
        projectDescription: 'A subscription tracker.',
        projectImage: 'https://imgur.com/cuagYi1.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{JavaScript} {Rails} {Postgresql} {CSS}</div>,  
    },
    {
        projectName: 'Picturesque',
        projectDescription: 'An Instagram clone programmed using Ruby on Rails.',
        projectImage: 'https://imgur.com/oSeZ60V.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{Rails} {Sass} {SQL} {CSS}</div>,  
    },
    {
        projectName: 'Catch Light',
        projectDescription: 'A community for photographers to share their images.',
        projectImage: 'https://imgur.com/9BdPwsF.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{Ruby} {Sass} {SQL} {CSS}</div>,  
    },
    {
        projectName: 'Thumbelina Game',
        projectDescription: 'An indie game project.',
        projectImage: 'https://imgur.com/1Q2l9En.png',
        projectLink: '',
        projectGithub: '',
        projectTech: <div className="bg-transparent">{Unity} {CSharp}</div>,  
    },
]

export default ProjectsData;