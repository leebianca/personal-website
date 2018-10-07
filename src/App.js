import React, { Component } from 'react';
import background from './background.png';

import './App.css';
import About from './About/About';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Landing-page">
          <div className="Header">
            <Header className="Header-link" name="ABOUT" link="#about"/>
            <Header className="Header-link" name="EXPERIENCE" link='#experience'/>
            <Header className="Header-link" name="PROJECTS" link="#projects"/>
          </div>
          <img src={background} className="Background-image" alt="background" />
          <h1 className="Hello">HELLO<br/>I'M BIANCA</h1>
        </div>
        <About id='about'></About>
        <Experiences id='experience'></Experiences>
        <Projects id='projects'></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
