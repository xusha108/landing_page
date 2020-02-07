import React, { Component } from 'react';
import LogoImage from '../../img/logo.png'



class Logo extends Component {
    render() {
        return (
        <div className="logo">
            <a href='/'>
                <img src={LogoImage} alt='#'/>
            </a>
            <span>BuhOne</span>
        </div>
        )
    }
}

export default Logo;