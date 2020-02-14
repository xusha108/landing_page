import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Presentations from './components/Presentations/Presentation'
import Specialize from './components/Specialize/Specialize'
import About from './components/About/About'
import Partners from './components/Partners/Partners'
import Reviews from './components/Reviews/Reviews'
import Contacts from './components/Contacts/Contacts'




class App extends Component {
  render() {
     return (
        <div>
           <Header />
           <Presentations />
           <Specialize />
           <About />
           <Partners />
           <Reviews  />
           <Contacts />
           <Footer />
           
        </div>
     );
  }
}

export default App;
