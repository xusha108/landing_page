import React, { Component } from 'react';

import '../../styles/Specialize.css'



export default class Specialize extends Component {
    render() {     
       const imgs = [
         'Бухгалтерское обслуживание',
         'Бухгалтерское обслуживание',
         'Бухгалтерское обслуживание',
         'Бухгалтерское обслуживание',
         'Бухгалтерское обслуживание',
         'Бухгалтерское обслуживание', 
       ]

       return (
         <div className='spec_wrapper'>
            
            <div className='spec_title'>
               <p>Наши услуги</p>
               <h2>Мы специализируемся</h2>
            </div>

            <div className='spec_block'>               

            {imgs.map( (value, index) => {
               return <div key={index} className='spec_item'>
                        <Tile  label={value} />
                     </div>
            })}
           </div>
       </div>
       )
    }
}

class Tile extends Component {
 render() {
    const url='/' + this.props.label.toLowerCase().trim().replace( ' ', '-');
    return <div><a href={url}>{this.props.label}</a></div>
   }
}
