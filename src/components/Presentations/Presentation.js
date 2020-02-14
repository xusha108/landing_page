import React, { Component } from 'react';

import '../../styles/Prezentation.css';
import Slider from './Slider'

export default class Presentation extends Component {
    render() {
                       
       return (
        <div>
            <Slider />          
            <div className="slider_info">         
                <h1>Бухгалтерские услуги в Санкт-Петербурге</h1>
                <button>Наша презентация</button>
            </div>
            

        </div>       
         )
      }
 }