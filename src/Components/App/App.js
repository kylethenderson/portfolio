import React, { Component } from 'react';
import './App.css';

// Components
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
