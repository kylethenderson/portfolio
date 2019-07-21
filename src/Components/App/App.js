import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
// import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll'
import { Link, animateScroll as scroll } from 'react-scroll';

import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'

// Components
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

class App extends Component {

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Element name="top" className="element">
          </Element>
          <Route path='/' component={Header} />
          <div id="mainContent">
            <Intro />
            <Element name="projects" className="element">
              <Projects />
            </Element>
            <Element name="skills" className="element">
              <Skills />
            </Element>
            <Element name="contact" className="element">
              <Contact />
            </Element>
            <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={1000} onSetActive={this.handleSetActive}>
              <Tooltip title="Back to top">
                <Icon id="upIcon">arrow_upward</Icon>
              </Tooltip>
            </Link>
          </div>
          <Route path='/' component={Footer} />
        </Router>
      </div >
    );
  }
}

export default App;
