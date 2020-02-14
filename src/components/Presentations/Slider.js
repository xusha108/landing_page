import React, { Component } from 'react'

import '../../styles/Prezentation.css'
import ImgOne from '../../img/Rectangle_slider.png'
import ImgTwo from '../../img/slider_2.png'
import ImgThree from '../../img/slider_3.jpg'
import ImgFour from '../../img/slider_4.jpg'
import leftArrow from '../../img/button-prev.png'
import rightArrow from '../../img/button-next.png'
import Dot from '../../img/dot.png'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
       ImgOne,
       ImgTwo,
       ImgThree,
       ImgFour,
        ],
      currentImageIndex: 0,
      isCycledMode: false,
    }
    this.nextSliderHandler=this.nextSliderHandler.bind(this);
  }
   
  nextSliderHandler ( e ) {
   let newIndex = this.state.currentImageIndex

   if ( e.currentTarget.dataset.direction === 'next') {
     if(newIndex < this.state.images.length -1) {
       newIndex = this.state.currentImageIndex + 1;
     }
   } else {
    if(newIndex > 0) {
      newIndex = this.state.currentImageIndex - 1;
    }
   }
   this.setState({currentImageIndex:newIndex })   
}          
    render() {
      return (        
        <div className="slider">        
          <img src={this.state.images[this.state.currentImageIndex]} alt='' />
                      
          <div className='slider_btn'>
            <img src={leftArrow}
              data-direction='prev'
              onClick={this.nextSliderHandler.bind(this)}
                alt='#' />
              
            <img src={rightArrow}
              data-direction='next'
              onClick={this.nextSliderHandler.bind(this)}
                alt='#'
                />            
          </div>

          <div className='dot'>
            <img src={Dot}  alt='#' />
            <img src={Dot}  alt='#' />
            <img src={Dot}  alt='#' />
            <img src={Dot}  alt='#' />     
        
          </div>    
        </div>
    );
  }
}