import React from 'react'
import gitImg from '../assets/images/git.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'



const Github = () => (
    <div className="row git">
        <h3>There are also more projects that I have worked on</h3>
        <h4>You can check them out by clicking the icon below <FontAwesomeIcon style={{textShadow: '2px 2px #000000'}} icon={faAngleDown} className="icon-big"/></h4>
        <a href="https://github.com/kulaszewicz" target="_blank"><img src={gitImg} alt={'git-img'} className="git-img"/></a>
    </div>
);

export default Github;