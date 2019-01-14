import React, { Component } from 'react';

import './App.css';
import navbar from './navbar.png';
import dots from './dots.png';
import arrow from './arrow.png';
import resume from './Resume.pdf';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Landing-page">
          {/* <img className="navbar" src={navbar} alt="navbar"/> */}
          <div className="Navigation">
            {/* <Header className="Header-link" name="About" link="#about"/> */}
            <Header className="Header-link" name="work" link="#work"/>
            <Header className="Header-link" name="resumé" link={resume}/>
            <Header className="Header-link" name="contact" link="#contact"/>
          </div>
          <h2 className="home">BIANCA LEE</h2>
          <h1 className="Hello">Hello!</h1>
          <h3 className="intro">I'm a first-year at UC Berkeley studying computer science, and I’m passionate about creating beautiful designs that help the world around me.</h3>
          <div className="button-wrapper">
            <button className="button" type="button">developer</button>
            <button className="button" type="button">designer</button>
            <button className="button" type="button">learner</button>
          </div>
        </div>
        <img className="arrow bounce" src={arrow} alt="arrow"/>
        <div id="work"><Projects id="work"/></div>
        <div id="contact"><Footer id="contact"/></div>
      </div>
    );
  }
}

export default App;
