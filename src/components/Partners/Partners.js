import React, { Component } from 'react';

import '../../styles/Partners.css'
import LogoImgs from '../../img/partners_logos.png'
import Slider from '../Presentations/Slider';

export default class Partners extends Component {
    render() {
        const arrLogos = [
            LogoImgs,
            LogoImgs,
            LogoImgs,
            LogoImgs,
        ]
        
               
       return (
        <div className="partners_wrapper">

            <div className='partners_block'>
                <h2>Наши клиенты</h2>
                <p>С нами работают</p>
            </div>

            <div className="partners_logos" >

                { arrLogos.map( (item, index) => {
                    return <div key={index}><a href="url"><img src={item} alt='#' /></a></div>
                    })
                }               
            </div>

            <Slider />

        </div>       
         )
      }
 }

