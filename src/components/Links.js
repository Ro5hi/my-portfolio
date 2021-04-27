import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

    const Links = () => {

        const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
        const github = <FontAwesomeIcon icon={faGithub} size="2x" />
        const medium = <FontAwesomeIcon icon={faMedium} size="2x" />
        const resume = <FontAwesomeIcon icon={faFile} size="2x" />
        const youtube = <FontAwesomeIcon icon={faYoutube} size="2x" />
        const ig = <FontAwesomeIcon icon={faInstagram} size="2x" />


        return (
            <div className="bg-black text-s h-full w-full text-white font-light">
                <a href='https://www.linkedin.com/in/shirlend'>{linkedin}</a>{"      "}
                <a href ='https://www.lendeta.medium.com'> {medium} </a>{"      "}
                <a href ='https://www.github.com/Ro5hi'> {github} </a>{"      "}
                <a href ='https://www.youtube.com/channel/UC_0nik4oj1T1Q160XVr0ZlA'> {youtube} </a>{"      "}
                <a href ='https://www.instagram.com/_sceptral_'> {ig} </a>{"      "}
                <a href ='https://drive.google.com/file/d/14yvjn_PU3nb5wm9pnf-40O1VJgMqkHb7/view?usp=sharing'>{resume}</a>{"      "}
            </div>
        )
    }

    export default Links