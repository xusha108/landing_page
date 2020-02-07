import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slider from './components/Slider/Slider'
import Specialize from './components/Specialize/Specialize'
import About from './components/About/About'


class App extends Component {
  render() {
     return (
        <div>
           <Header />
           <Slider />
           <Specialize />
           <About />
           <Footer />
           
        </div>
     );
  }
}

export default App;
