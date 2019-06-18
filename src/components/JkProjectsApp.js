import React from 'react'

import Header from './Header'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Github from './Github'
import Contact from './Contact'
import LoadingScreen from './LoadingScreen'

import MobilePortfolio from './Mobile/MobilePortfolio'

import backGroundImg from '../assets/images/backgroundHead.jpg'
import arrowRight from '../assets/images/arrow-point-to-right.svg'
import arrowLeft from '../assets/images/arrow-point-to-left.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class JkProjectsApp extends React.Component {
    constructor() {
        super();
        this.state = { isLoading: true}
    }

    state = {
        currWidth: undefined,
        isMobilePhone: false
    };

    handleIsMobilePhone = () => {
        if(window.innerWidth <= 768){
            this.setState(() => ({
                isMobilePhone: true
            }))
        } else {
            this.setState(() => ({
                isMobilePhone: false
            }))
        }
    };

    componentDidMount() {
        this.setState({isLoading: false});
        this.handleIsMobilePhone();
        window.addEventListener('resize', this.handleIsMobilePhone)
    }

    render(){
        if (this.state.isLoading) return (<div><LoadingScreen/></div>);
        else {
            if (this.state.isMobilePhone === true) {
                return (
                    <header style={this.props.style}>
                        <div className={'headerGradient'}>
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={100}
                                totalSlides={6}
                                dragEnabled={false}
                                className={'slider sliderMobile'}
                            >
                                <nav>
                                    <div className="row">
                                        <ul className="main-nav">
                                            <li><Dot className={'nav-dot'} slide={1}><a>About me</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={2}><a>Skills</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={3}><a>Portfolio</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={4}><a>Github</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={5}><a>Contact</a></Dot></li>
                                        </ul>
                                    </div>
                                </nav>

                                <Slider className={'slider sliderMobile'}>
                                    <Slide index={0}> <Header /> </Slide>
                                    <Slide index={1}> <AboutMe /> </Slide>
                                    <Slide index={2}> <Skills /> </Slide>
                                    <Slide index={3}> <MobilePortfolio /> </Slide>
                                    <Slide index={4}> <Github /> </Slide>
                                    <Slide index={5}> <Contact /> </Slide>
                                </Slider>

                                <ButtonBack><img className={'arrow-left'} src={arrowLeft}/></ButtonBack>
                                <ButtonNext><img className={'arrow-right'} src={arrowRight}/></ButtonNext>
                            </CarouselProvider>

                        </div>
                    </header>
                )
            } else {
                return (
                    <header style={this.props.style}>
                        <div className={'headerGradient'}>
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={100}
                                totalSlides={6}
                                dragEnabled={false}
                                className={'slider sliderMobile'}
                            >
                                <nav>
                                    <div className="row">
                                        <ul className="main-nav">
                                            <li><Dot className={'nav-dot'} slide={1}><a>About me</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={2}><a>Skills</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={3}><a>Portfolio</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={4}><a>Github</a></Dot></li>
                                            <li><Dot className={'nav-dot'} slide={5}><a>Contact</a></Dot></li>
                                        </ul>
                                    </div>
                                </nav>

                                <Slider className={'slider sliderMobile'}>
                                    <Slide index={0}> <Header /> </Slide>
                                    <Slide index={1}> <AboutMe /> </Slide>
                                    <Slide index={2}> <Skills /> </Slide>
                                    <Slide index={3}> <Portfolio /> </Slide>
                                    <Slide index={4}> <Github /> </Slide>
                                    <Slide index={5}> <Contact /> </Slide>
                                </Slider>

                                <ButtonBack><img className={'arrow-left'} src={arrowLeft}/></ButtonBack>
                                <ButtonNext><img className={'arrow-right'} src={arrowRight}/></ButtonNext>
                            </CarouselProvider>

                        </div>
                    </header>

                )
            }
        }

    }
}

JkProjectsApp.defaultProps = {
    style: {
        backgroundImage: `linear-gradient(to right, rgba(54, 0, 51, 0.39), rgba(11, 135, 147, 0.39)), url(${backGroundImg})`,
    }
};