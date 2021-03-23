import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


    const Links = () => {

        const linkedin = <FontAwesomeIcon icon={faLinkedin} size="lg" />
        const github = <FontAwesomeIcon icon={faGithub} size="lg" />
        const medium = <FontAwesomeIcon icon={faMedium} size="lg" />
        const resume = <FontAwesomeIcon icon={faFile} size="lg" />
        const youtube = <FontAwesomeIcon icon={faYoutube} size="lg" />


        return (
            <div className="text-s h-32 w-32 text-white font-light">
                <p class="tracking-normal animate-bounce">
                <a href='https://www.linkedin.com/in/shirlend'>{linkedin}</a>{"      "}
                <a href ='https://www.lendeta.medium.com'> {medium} </a>{"      "}
                <a href ='https://www.github.com/Ro5hi'> {github} </a>{"      "}
                <a href ='https://www.youtube.com/channel/UC_0nik4oj1T1Q160XVr0ZlA'> {youtube} </a>{"      "}
                <a href ='https://docs.google.com/document/d/1oVxYKuRnUHrJBUHrv1-L5Cb8D9v4PpARODo32hcSc8w/edit?usp=sharing'>{resume}</a>{"      "}
                </p>
            </div>
        )
    }

    export default Links