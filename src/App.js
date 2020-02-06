import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
     return (
        <div>
           <Header />
           <Footer />
           
        </div>
     );
  }
}

export default App;
