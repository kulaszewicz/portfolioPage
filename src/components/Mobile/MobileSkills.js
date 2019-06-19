import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import arrowTop from '../../assets/images/arrow-point-to-top.svg'
import arrowBottom from '../../assets/images/arrow-point-to-bottom.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPalette } from '@fortawesome/free-solid-svg-icons'



export default class MobileSkills extends React.Component {

    state = {
        currSlide: 0
    };

    handleNextSlide = () => {
        this.setState((prevState)=> ({
            currSlide: prevState.currSlide +1
        }))
    };

    handlePrevSlide = () => {
        this.setState((prevState)=> ({
            currSlide: prevState.currSlide -1
        }))
    };

    render(){
        return  (
            <section className="section-skills" id="skills">
                <div className="row">
                    <h2>My skills</h2>
                </div>
                <div className="row">
                    <div className="col box">
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={125}
                            totalSlides={2}
                            dragEnabled={false}
                            className={'sliderMobile'}
                            orientation={'vertical'}
                            touchEnabled={false}
                        >
                            <Slider className={'sliderMobile'}>
                                <Slide index={0}>
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
                                </Slide>
                                <Slide index={1}>
                                    <h3><FontAwesomeIcon icon={faPalette} className="icon-big" />Graphic design</h3>
                                    <ul className="skill-nav">
                                        <li>-------------</li>
                                        <li>Adobe Illustrator &mdash; Medium</li>
                                        <li>Adobe Photoshop &mdash; Medium</li>
                                        <li>Blender &mdash; Basics</li>
                                        <li>-------------</li>
                                    </ul>
                                </Slide>
                            </Slider>

                            {this.state.currSlide !== 0 &&
                            <ButtonBack onClick={this.handlePrevSlide} className={'btn-top'}>
                                <img className={'arrow-top'} src={arrowTop}/>
                            </ButtonBack>
                            }
                            {this.state.currSlide !== 1 &&
                            <ButtonNext onClick={this.handleNextSlide} className={'btn-bot'}>
                                <img className={'arrow-bottom'} src={arrowBottom}/>
                            </ButtonNext>
                            }
                        </CarouselProvider>
                    </div>

                </div>

            </section>
        );
    }
};