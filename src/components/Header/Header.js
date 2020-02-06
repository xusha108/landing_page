import React, { Component } from 'react';

import Menu from './Menu'
import TopLine from './TopLine'
import Logo from './Logo'
import '../../styles/Header.css'



class Header extends Component {
    render() {
       return (
          <div className= 'header-wrapper'>
             <Logo />
             <TopLine />
             <Menu />
          </div>
       );
    }
 }

 export default Header;