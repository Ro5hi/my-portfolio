import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


    const Links = () => {

        const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
        const github = <FontAwesomeIcon icon={faGithub} size="2x" />
        const medium = <FontAwesomeIcon icon={faMedium} size="2x" />
        const resume = <FontAwesomeIcon icon={faFile} size="2x" />
        const youtube = <FontAwesomeIcon icon={faYoutube} size="2x" />


        return (
            <div className="justify-between text-s h-full w-full text-white font-light">
                <a href='https://www.linkedin.com/in/shirlend'>{linkedin}</a>{"      "}
                <a href ='https://www.lendeta.medium.com'> {medium} </a>{"      "}
                <a href ='https://www.github.com/Ro5hi'> {github} </a>{"      "}
                <a href ='https://www.youtube.com/channel/UC_0nik4oj1T1Q160XVr0ZlA'> {youtube} </a>{"      "}
                <a href ='https://docs.google.com/document/d/1oVxYKuRnUHrJBUHrv1-L5Cb8D9v4PpARODo32hcSc8w/edit?usp=sharing'>{resume}</a>{"      "}
            </div>
        )
    }

    export default Links