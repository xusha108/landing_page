import React, { Component } from 'react';

class Menu extends Component {
    render() {
        const menus = [
           'Главная',
           'Услуги',
           'Кейсы',
           'О компании',
           'Контакты',       
         ]
       return (

          <div className='menu'>
            
           {menus.map( (value, index) => {
              return <div key={index} className='menu_items'>
                 <Link  label={value} />
               </div>
            })}
         </div>
         )
      }
 }

 class Link extends Component {
   render() {
      const url='/' + this.props.label.toLowerCase().trim().replace( ' ', '-');
      return <div><a href={url}>{this.props.label}</a></div>
   }
}

 export default Menu