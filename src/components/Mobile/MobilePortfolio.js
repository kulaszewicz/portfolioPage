import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import arrowTop from '../../assets/images/arrow-point-to-top.svg'
import arrowBottom from '../../assets/images/arrow-point-to-bottom.svg'
import kamirImg from '../../assets/images/kamir.png'
import mappkaImg from '../../assets/images/mappka.png'
import rewineImg from '../../assets/images/rewine.png'

import SingleProject from './SingleProject'




export default class MobilePortfolio extends React.Component {

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
           <section className="section-portfolio" id="portfolio">
               <div className="row">
                   <h1>Portfolio</h1>
                   <h3>My Recent Projects</h3>
                   <div className="row">
                       <div className="col box">
                           <CarouselProvider
                               naturalSlideWidth={100}
                               naturalSlideHeight={145}
                               totalSlides={3}
                               dragEnabled={false}
                               className={'sliderMobile'}
                               orientation={'vertical'}
                               touchEnabled={false}
                           >
                               <Slider className={'sliderMobile'}>
                                   <Slide index={0}>
                                       <SingleProject title={'Kamir'} img={kamirImg} projectState={'completed'} link={'projects/kamir/index.html'}
                                                      paragraph={'Kamir is a website project for a jewellery shop that I\'ve worked in.\n' +
                                                      '                            It was build using grid.css standard.'}
                                       />
                                   </Slide>
                                   <Slide index={1}>
                                       <SingleProject title={'Mappka'} img={mappkaImg} projectState={'completed'} link={'https://github.com/kulaszewicz/Mappka'}
                                                      paragraph={'Mappka is a Hackathon Wizja Rozwoju 2019 project created in 24h which aim was to create new kind of city map, click image for details'}
                                       />
                                   </Slide>
                                   <Slide index={2}> <SingleProject
                                       title={'Rewine App'} img={rewineImg} projectState={'completed'} link={'https://github.com/kulaszewicz/ReWine'}
                                       paragraph={'ReWine is a simple react webapp, which is using a neural network to determine the quality of your wine. All you need to do is complete the form and see the results.'}
                                   />
                                   </Slide>
                               </Slider>

                               {this.state.currSlide !== 0 &&
                                   <ButtonBack onClick={this.handlePrevSlide} className={'btn-top'}>
                                        <img className={'arrow-top'} src={arrowTop}/>
                                   </ButtonBack>
                               }
                               {this.state.currSlide !== 2 &&
                                   <ButtonNext onClick={this.handleNextSlide} className={'btn-bot'}>
                                       <img className={'arrow-bottom'} src={arrowBottom}/>
                                   </ButtonNext>
                               }
                           </CarouselProvider>
                       </div>
                   </div>
               </div>
           </section>
       );
   }
}

