import React from 'react'
import kamirImg from '../assets/images/kamir.png'
import mappkaImg from '../assets/images/mappka.png'
import rewineImg from '../assets/images/rewine.png'

const Portfolio = () => (
    <section className="section-portfolio" id="portfolio">
        <div className="row">
            <h1>Portfolio</h1>
            <h3>My Recent Projects</h3>
            <div className="row">
                <div className="col span-1-of-3 box">
                    <a href="projects/kamir/index.html" target="_blank"><h4>Kamir</h4>
                    <img src={kamirImg} alt={'kamirImg'} className="project-img"/></a>
                        <h5 className="completed">Completed</h5>
                        <p className="project-text">Kamir is a website project for a jewellery shop that I've worked in.
                            It was build using grid.css standard.
                        </p>
                </div>
                <div className="col span-1-of-3 box">
                    <a href="https://github.com/kulaszewicz/Mappka" target="_blank"><h4>Mappka</h4>
                    <img src={mappkaImg} alt={"MappkaImg"} className="project-img"/></a>
                        <h5 className="completed">Completed</h5>
                        <p className="project-text">Mappka is a Hackathon Wizja Rozwoju 2019 project created in 24h which aim was to create new kind of city map, click image for details.
                        </p>
                </div>
                <div className="col span-1-of-3 box">
                    <a href="https://github.com/kulaszewicz/ReWine" target="_blank"><h4>Rewine App</h4>
                    <img src={rewineImg} alt={"reWineApp"} className="project-img"/></a>
                        <h5 className="completed">Completed</h5>
                        <p className="project-text">ReWine is a simple react webapp, which is using a neural network to determine the quality of your wine. All you need to do is complete the form and see the results.
                        </p>
                </div>
            </div>
        </div>
    </section>
);

export default Portfolio;