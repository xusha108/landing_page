import React, { Component } from 'react'

import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import '../../styles/Slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "../../img/Rectangle_slider.png",
        "../../img/slider_2.png",
        "../../img/slider_3.jpg",
        "../../img/slider_4.jpg",
        ],
      currentIndex: 0,
      translateValue: 0
    }
    
  }
  

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }

           
    render() {
        
        return (           

            <div className="slider">
                
           <div className="slider-wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,// ?
                transition: 'transform ease-out 0.45s'
            }}>
                {
                this.state.images.map((image, i) => (
                    <Slide key={i} image={image} />
                ))
                }
            </div>




        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}

         
        />

        
      </div>
    );
  }
}