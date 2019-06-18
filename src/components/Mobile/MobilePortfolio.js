import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import arrowTop from '../../assets/images/arrow-point-to-top.svg'
import arrowBottom from '../../assets/images/arrow-point-to-bottom.svg'
import kamirImg from '../../assets/images/kamir.png'
import arcaneaImg from '../../assets/images/arcanea.png'
import rewineImg from '../../assets/images/rewine.png'

import SingleProject from './SingleProject'




const MobilePortfolio = () => (
    <section className="section-portfolio" id="portfolio">
        <div className="row">
            <h1>Portfolio</h1>
            <h3>My Recent Projects</h3>
            <div className="row">
                <div className="col box">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={3}
                        dragEnabled={false}
                        className={'slider sliderMobile'}
                        orientation={'vertical'}
                    >
                        <Slider className={'slider sliderMobile'}>
                            <Slide index={0}>
                                <SingleProject title={'Kamir'} img={kamirImg} projectState={'completed'}
                                               paragraph={'Kamir is a website project for a jewellery shop that I\'ve worked in.\n' +
                                               '                            It was build using grid.css standard.'}
                                />
                            </Slide>
                            <Slide index={1}>
                                <SingleProject title={'Arcanea Board Game'} img={arcaneaImg} projectState={'in-progress'}
                                               paragraph={'Arcanea is a web board game where the board made of hex shaped fields is always randomly generated based on algorithm I wrote myself in JS.'}
                            />
                            </Slide>
                            <Slide index={2}> <SingleProject
                                                title={'Rewine App'} img={rewineImg} projectState={'completed'}
                                                paragraph={'ReWine is a simple react webapp, which is using a neural network to determine the quality of your wine. All you need to do is complete the form and see the results.'}
                            />
                            </Slide>
                        </Slider>

                        <ButtonBack><img className={'arrow-top'} src={arrowTop}/></ButtonBack>
                        <ButtonNext><img className={'arrow-bottom'} src={arrowBottom}/></ButtonNext>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    </section>
);

export default MobilePortfolio;