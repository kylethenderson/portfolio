import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route path='/' component={Header} />
          <div id="mainContent">
            <Intro />
            <Projects />
          </div>
          <Route path='/' component={Footer} />
        </Router>
      </div>
    );
  }
}

export default App;
