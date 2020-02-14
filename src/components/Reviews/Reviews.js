import React, { Component } from 'react';

import '../../styles/Reviews.css'
import ReviewsBlock from './ReviewsBlock'
// import Dot from '../../img/dot.png'
// import BtnNext from '../../img/slider__button-next.png'
// import BtnPrev from '../../img/slider__button-prev.png'



export default class Reviews extends Component {
    render() {            
                              
       return (
        <div className="reviews_wrapper">
            <h2>Отзывы</h2>
            <p>Ваши благодарности</p>

            <ReviewsBlock /> 

            {/* <div className='dots'>
                <img src={Dot}></img>
                <img src={Dot}></img>
                <img src={Dot}></img>
                <img src={Dot}></img>
            </div>

            <div className='btn_slider'>
                <img src={BtnPrev}></img>
                <img src={BtnNext}></img>
                
            </div>         */}


                
        
                   
        </div>       
         )
      }
 }