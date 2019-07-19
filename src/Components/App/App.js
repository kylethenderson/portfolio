import React, { Component } from 'react';
import './App.css';

// Components
import Header from '../Header/Header'

import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1>Portfolio</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
