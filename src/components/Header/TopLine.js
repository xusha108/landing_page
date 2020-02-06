import React, { Component } from 'react';
 
 class TopLine extends Component {
    render() {
       return (
       <ul className='top_line'>
                <li>8 (111) 222-33-44</li>
                <li>Пн-Пт 10:00-18:00</li>
                <a href = '/'><li>order@buhone.ru</li></a>
                <li>Невский пр. 130</li>
            </ul>
       )
    }
 }

 
 export default TopLine