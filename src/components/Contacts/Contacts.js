import React, { Component } from 'react';

import '../../styles/Contacts.css'
import Form from './Form'

export default class Contacts extends Component {
    render() {            
                              
       return (
        <div className="contacts_wrapper">

          <div className='contacts_block'>

            <div className='contacts_info'>
              <h1>Связь с нами</h1>
              <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
              <ul className='contacts_mail'>
                <li>+7 (111) 222-33-44</li>
                <a href = '/'><li>order@buhone.ru</li></a>
              </ul>

            </div>
            <Form />
          </div>      
        </div>        
        
      )
    }
}