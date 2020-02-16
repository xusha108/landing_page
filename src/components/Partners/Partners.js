import React, { Component } from 'react';

import '../../styles/Partners.css'
import LogoImgs from '../../img/partners_logos.png'
import Slider2 from '../Partners/Slider2';

export default class Partners extends Component {
    state = {
        arrLogos : [
            LogoImgs,
            LogoImgs,
            LogoImgs,
            LogoImgs,
        ]
    }
    render() {
        const { arrLogos } = this.state;        
               
       return (
        <div className="partners_wrapper">

            <div className='partners_block'>
                <h2>Наши клиенты</h2>
                <h1>С нами работают</h1>
            </div>

            <Slider2 images={ arrLogos } className='slider2' />
          
        </div>       
         )
      }
 }

