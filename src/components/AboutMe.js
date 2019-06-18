import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const AboutMe = () => (
    <section className="section-aboutMe js--section-aboutMe" id="aboutMe">
        <div className="row">
            <h2>About me<FontAwesomeIcon icon={faGraduationCap} className="icon-big" /></h2>
            <p className="long-copy">
                Hello, my name is Jakub. I'm in my third year of studies towards a bachelor's of engineering in Computer Sciences.<br/> I've been coding and solving problems for quite some time.<br/> Come and have a look at my work!
            </p>
        </div>
    </section>
);


export default AboutMe;

