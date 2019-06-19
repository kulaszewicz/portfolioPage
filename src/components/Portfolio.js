import React from 'react'
import kamirImg from '../assets/images/kamir.png'
import arcaneaImg from '../assets/images/arcanea.png'
import rewineImg from '../assets/images/rewine.png'

const Portfolio = () => (
    <section className="section-portfolio" id="portfolio">
        <div className="row">
            <h1>Portfolio</h1>
            <h3>My Recent Projects</h3>
            <div className="row">
                <div className="col span-1-of-3 box">
                    <a href="projects/kamir/index.html" target="_blank"><h4>Kamir</h4></a>
                    <img src={kamirImg} alt={'kamirImg'} className="project-img"/>
                        <h5 className="completed">Completed</h5>
                        <p className="project-text">Kamir is a website project for a jewellery shop that I've worked in.
                            It was build using grid.css standard.
                        </p>
                </div>
                <div className="col span-1-of-3 box">
                    <a href="https://github.com/kulaszewicz/ArcaneaBoardGame" target="_blank"><h4>Arcanea Board Game</h4></a>
                    <img src={arcaneaImg} alt={"arcaneaImg"} className="project-img"/>
                        <h5 className="in-progress">In-progress</h5>
                        <p className="project-text">Arcanea is a web board game where the board
                            made of hex shaped fields is always randomly generated based on algorithm I wrote myself in
                            JS.
                        </p>
                </div>
                <div className="col span-1-of-3 box">
                    <a href="https://github.com/kulaszewicz/ReWine" target="_blank"><h4>Rewine App</h4></a>
                    <img src={rewineImg} alt={"reWineApp"} className="project-img"/>
                        <h5 className="completed">Completed</h5>
                        <p className="project-text">ReWine is a simple react webapp, which is using a neural network to determine the quality of your wine. All you need to do is complete the form and see the results.
                        </p>
                </div>
            </div>
        </div>
    </section>
);

export default Portfolio;