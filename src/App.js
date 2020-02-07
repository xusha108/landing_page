import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slider from './components/Slider/Slider'


class App extends Component {
  render() {
     return (
        <div>
           <Header />
           <Slider />
           <Footer />
           
        </div>
     );
  }
}

export default App;
