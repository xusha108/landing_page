import React, { Component } from 'react';

import '../../styles/Prezentation.css';
import Slider from './Slider'
import ImgOne from '../../img/Rectangle_slider.png'
import ImgTwo from '../../img/slider_2.png'
import ImgThree from '../../img/slider_3.jpg'
import ImgFour from '../../img/slider_4.jpg'

export default class Presentation extends Component {
    
    state = {
        images: [
            ImgOne,
            ImgTwo,
            ImgThree,
            ImgFour,
        ]        
    };

    render() {
        const {images}=this.state;       
                      
       return (
        <div>
            <Slider images={images} />     
                     
            <div className="slider_info">         
                <h1>Бухгалтерские услуги в Санкт-Петербурге</h1>
                <button>Наша презентация</button>
            </div>       

        </div>       
         )
      }
 }