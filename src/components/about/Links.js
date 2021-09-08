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
            <div className="text-left flex mx-auto text-xs h-1/2 pr-12 w-full text-white font-light">
                <div className="">
                    <img className="rounded-lg" src="https://opendoodles.s3-us-west-1.amazonaws.com/coffee.gif" alt="img" />
                </div>
                <div className="p-8 pt-16 pb-4 tracking-wide">
                    <a href='https://www.linkedin.com/in/shirlend'>{linkedin}</a><br/>
                    <a href ='https://www.lendeta.medium.com'> {medium} </a><br/>
                    <a href ='https://www.github.com/Ro5hi'> {github} </a><br/>
                    <a href ='https://www.youtube.com/channel/UC_0nik4oj1T1Q160XVr0ZlA'> {youtube} </a><br/>
                    <a href ='https://www.instagram.com/_sceptral_'> {ig} </a><br/>
                    <a href ='https://drive.google.com/file/d/14yvjn_PU3nb5wm9pnf-40O1VJgMqkHb7/view?usp=sharing'>{resume}</a><br/>
                </div>
            </div>
        )
    }

    export default Links