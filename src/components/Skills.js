import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPalette } from '@fortawesome/free-solid-svg-icons'


const Skills = () => (

    <section className="section-skills js--section-skills" id="skills">
        <div className="row">
            <h2>My skills</h2>
        </div>
        <div className="row">
            <div className="col span-1-of-2 box">

                <h3><FontAwesomeIcon icon={faCoffee} className="icon-big" />Programing</h3>
                <ul className="skill-nav">
                    <li>-------------</li>
                    <li>Javascript ES5/6 &mdash; Medium</li>
                    <li>ReactJs &mdash; Medium</li>
                    <li>Node.js &mdash; Basics</li>
                    <li>JQuery &mdash; Basics</li>
                    <li>Webpack &mdash; Basics</li>
                    <li>-------------</li>
                    <li>C/C++ &mdash; Basics</li>
                    <li>Assembly x86 &mdash; Basics</li>
                    <li>Java &mdash; Basics</li>
                    <li>-------------</li>
                    <li>HTML &mdash; Medium</li>
                    <li>CSS3 &mdash; Medium</li>
                    <li>SASS &mdash; Basics</li>
                    <li>-------------</li>
                </ul>
            </div>
            <div className="col span-1-of-2 box">

                <h3><FontAwesomeIcon icon={faPalette} className="icon-big" />Graphic design</h3>
                <ul className="skill-nav">
                    <li>-------------</li>
                    <li>Adobe Illustrator &mdash; Medium</li>
                    <li>Adobe Photoshop &mdash; Medium</li>
                    <li>Blender &mdash; Basics</li>
                    <li>-------------</li>
                </ul>
            </div>
        </div>

    </section>
);

export default Skills;