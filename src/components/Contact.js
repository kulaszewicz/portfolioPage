import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelDownAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faDiscord} from '@fortawesome/free-brands-svg-icons'

import meImg from '../assets/images/ja.jpg'

const Contact = () => (
    <section className="section-contact .js--section-contact" id="contact">
        <div className="row">
            <h1>Contact</h1>
            <h2>You can find me here </h2>
        </div>
        <div className="row">
            <div className="col span-1-of-2 box">
                <img src={meImg} className="me-img"/>
            </div>
            <div className="col span-1-of-2 box">
                <h5>Click<FontAwesomeIcon icon={faLevelDownAlt} className="icon-big icon-arrow" /></h5>
                <ul className="skill-nav">
                    <li>-------------</li>
                    <li><a href="mailto:s17838@pjwstk.edu.pl?subject=Masz ładne Portfolio">
                        <FontAwesomeIcon icon={faEnvelope} className="icon-big" />E-Mail</a></li>
                    <li><a href="https://www.facebook.com/jakub.kulaszewicz" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon-big" />Facebook</a></li>
                    <li><a href="https://discord.gg/kPHrEd" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} className="icon-big" />Discord</a>
                    </li>
                    <li>-------------</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Contact