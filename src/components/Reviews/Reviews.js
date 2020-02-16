import React, { Component } from 'react';

import '../../styles/Reviews.css'
import ReviewsBlock from './ReviewsBlock'

export default class Reviews extends Component {
    render() {            
                              
       return (
        <div className="reviews_wrapper">
            <h2>Отзывы</h2>
            <p>Ваши благодарности</p>

            <ReviewsBlock /> 
        
        </div>       
         )
      }
 }