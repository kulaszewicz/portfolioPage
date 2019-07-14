import React from 'react'

import Header from './Header'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Github from './Github'
import Contact from './Contact'
import LoadingScreen from './LoadingScreen'
import Stars from './Stars'

import MobilePortfolio from './Mobile/MobilePortfolio'
import MobileSkills from './Mobile/MobileSkills'

import backGroundImg from '../assets/images/backgroundHead.png'
import arrowRight from '../assets/images/arrow-point-to-right.svg'
import arrowLeft from '../assets/images/arrow-point-to-left.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class JkProjectsApp extends React.Component {
    constructor() {
        super();
        this.state = { isPageLoading: true, currSlide: 0}
    }

    state = {
        isMobilePhone: false,
        currSlide: 0,
        isPageLoading: true,
    };

    handleLoadingPage = () => {
        this.setState(()=> ({
            isPageLoading: false
        }), ()=> {
            console.log("image loaded");
            const app = document.getElementById('load-app');
            app.classList.add('showApp');
        })
    };

    handleCurrSlide = (e) => {
      this.setState(()=> ({
          currSlide: e
      }), () => {
          //console.log(this.state.currSlide);
      })
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
            if (this.state.isMobilePhone === true) {
                return (
                    <header style={this.props.style}>
                        <Stars/>
                        <div className={'headerGradient'}>
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={100}
                                totalSlides={6}
                                dragEnabled={false}
                                className={'slider slider-mobile-prim'}
                                touchEnabled={false}
                            >
                                <nav>
                                    <div className="row">
                                        <ul className="main-nav">
                                            <li>
                                                <Dot onClick={() => {this.handleCurrSlide(1)}} className={'nav-dot'} slide={1}>
                                                    <a>About me</a>
                                                </Dot>
                                            </li>
                                            <li>
                                                <Dot onClick={() => {this.handleCurrSlide(2)}} className={'nav-dot'} slide={2}>
                                                    <a>Skills</a>
                                                </Dot>
                                            </li>
                                            <li>
                                                <Dot onClick={() => {this.handleCurrSlide(3)}} className={'nav-dot'} slide={3}>
                                                    <a>Portfolio</a>
                                                </Dot>
                                            </li>
                                            <li>
                                                <Dot onClick={() => {this.handleCurrSlide(4)}} className={'nav-dot'} slide={4}>
                                                    <a>Github</a>
                                                </Dot>
                                            </li>
                                            <li>
                                                <Dot onClick={() => {this.handleCurrSlide(5)}} className={'nav-dot'} slide={5}>
                                                    <a>Contact</a>
                                                </Dot>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <Slider className={'slider slider-mobile-prim'}>
                                    <Slide index={0}> <Header /> </Slide>
                                    <Slide index={1}> <AboutMe /> </Slide>
                                    <Slide index={2}> <MobileSkills /> </Slide>
                                    <Slide index={3}> <MobilePortfolio /> </Slide>
                                    <Slide index={4}> <Github /> </Slide>
                                    <Slide index={5}> <Contact /> </Slide>
                                </Slider>

                                {this.state.currSlide !== 0 && <ButtonBack
                                                                onClick={this.handlePrevSlide}><img className={'arrow-left'} src={arrowLeft}/>
                                                                </ButtonBack>}
                                {this.state.currSlide !== 5 && <ButtonNext
                                                                onClick={this.handleNextSlide}><img className={'arrow-right'} src={arrowRight}/>
                                                                </ButtonNext>}
                            </CarouselProvider>

                        </div>
                    </header>
                )
            } else {
                return (
                    <div className={'app-wrapper'}>
                        {this.state.isPageLoading && <LoadingScreen/>}

                        <header id={'load-app'} style={this.props.style}>
                            <div className={'background'}>
                                <img onLoad={()=>{this.handleLoadingPage()}} src={backGroundImg} className={'background__image'}/>
                                <div className="background__gradient">&nbsp;</div>
                            </div>
                            <Stars/>
                            <div className={'headerGradient'}>
                                <CarouselProvider
                                    naturalSlideWidth={100}
                                    naturalSlideHeight={100}
                                    totalSlides={6}
                                    dragEnabled={false}
                                    className={'slider'}
                                >
                                    <nav>
                                        <div className="row">
                                            <ul className="main-nav">
                                                <li>
                                                    <Dot onClick={() => {this.handleCurrSlide(1)}} className={'nav-dot'} slide={1}>
                                                        <a>About me</a>
                                                    </Dot>
                                                </li>
                                                <li>
                                                    <Dot onClick={() => {this.handleCurrSlide(2)}} className={'nav-dot'} slide={2}>
                                                        <a>Skills</a>
                                                    </Dot>
                                                </li>
                                                <li>
                                                    <Dot onClick={() => {this.handleCurrSlide(3)}} className={'nav-dot'} slide={3}>
                                                        <a>Portfolio</a>
                                                    </Dot>
                                                </li>
                                                <li>
                                                    <Dot onClick={() => {this.handleCurrSlide(4)}} className={'nav-dot'} slide={4}>
                                                        <a>Github</a>
                                                    </Dot>
                                                </li>
                                                <li>
                                                    <Dot onClick={() => {this.handleCurrSlide(5)}} className={'nav-dot'} slide={5}>
                                                        <a>Contact</a>
                                                    </Dot>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <Slider className={'slider'}>
                                        <Slide index={0}> <Header /> </Slide>
                                        <Slide index={1}> <AboutMe /> </Slide>
                                        <Slide index={2}> <Skills /> </Slide>
                                        <Slide index={3}> <Portfolio /> </Slide>
                                        <Slide index={4}> <Github /> </Slide>
                                        <Slide index={5}> <Contact /> </Slide>
                                    </Slider>

                                    {this.state.currSlide !== 0 && <ButtonBack
                                        onClick={this.handlePrevSlide}><img className={'arrow-left'} src={arrowLeft}/>
                                    </ButtonBack>}
                                    {this.state.currSlide !== 5 && <ButtonNext
                                        onClick={this.handleNextSlide}><img className={'arrow-right'} src={arrowRight}/>
                                    </ButtonNext>}
                                </CarouselProvider>

                            </div>
                        </header>}
                    </div>

                )
            }
        }

}

//{this.state.isPageLoading && <LoadingScreen/>}