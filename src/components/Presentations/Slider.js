import React, { Component } from 'react'

import '../../styles/Prezentation.css'

import leftArrow from '../../img/button-prev.png'
import rightArrow from '../../img/button-next.png'
import Dot from '../../img/dot.png'

export default class Slider extends Component {
  constructor(props) {
    super(props) 
  }

  state = {
    currentImageIndex: 0,
  }
 

  changeSliderIndex = (index) => {
    
    if (this.checkExistIndex(index)) {
     this.setState({currentImageIndex: index})
    }    
  }

  checkExistIndex = (index) => {
     return typeof this.props.images[index] !== 'undefined';
  }

    render() {

      const { images } = this.props;
      const { currentImageIndex } = this.state;

      const dots = images.map((image, index) => {
        return (
          <img 
            src={Dot}  
            alt='#'
            key={index}
            className={currentImageIndex === index ? 'active' : ''} //добавляем класс из css
            onClick={() => this.changeSliderIndex(index)} 
          />  
        )
      })   

      return (        
        <div className="slider">       
          <img src={images[currentImageIndex]} alt='' />
                      
          <div className='slider_btn'>
            <img src={leftArrow}
              data-direction='prev'
              onClick={() => this.changeSliderIndex(currentImageIndex - 1)}
              alt='#' />
              
            <img src={rightArrow}
              data-direction='next'
              onClick={() => this.changeSliderIndex(currentImageIndex + 1)}
              alt='#' />             
          </div>

          <div className='dot'>
            {dots}        
          </div>    
        </div>
    );
  }
}