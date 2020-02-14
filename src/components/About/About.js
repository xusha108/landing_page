import React, { Component } from 'react';

import '../../styles/About.css'
import IvanovImage from '../../img/IvanovComp.png'

class About extends Component {
    render() {
        const url='/';

       return (

        <div className="about-wrapper">
            <div className='about_info'>
                <h5>О нас</h5>
                <img src={IvanovImage} alt='#' />
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в 
                    электронный дизайн.
                </p>
            </div>
            <div className='about_cards'>
                <div className='card'>
                    <h1>90</h1>
                    <p>Завершено крупных сделок</p>
                    <a href={url}>Все кейсы</a>
                </div>
                <div className='card'>
                    <h1>90</h1>
                    <p>Завершено крупных сделок</p>
                    <a href={url}>Все кейсы</a>
                </div>
                <div className='card'>
                    <h1>90</h1>
                    <p>Завершено крупных сделок</p>
                    <a href={url}>Все кейсы</a>
                </div>
                <div className='card'>
                    <h1>90</h1>
                    <p>Завершено крупных сделок</p>
                    <a href={url}>Все кейсы</a>
                </div>
            </div>   

            

        </div>

         
         )
      }
 }

 export default About;