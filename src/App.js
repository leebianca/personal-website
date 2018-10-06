import React, { Component } from 'react';
import background from './background.png';
import headshot from './headshot.jpg';
import codebase from './codebase.jpg';
import usc from './usc.jpg';
import hkasc from "./hkasc.png";
import resume from "./Resume.pdf";
import wild from "./wild.png";
import flavorbox from "./flavorbox.png";
import invitation from "./invitation.png";
import './App.css';
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
        <div id="about" className="About">
          <img src={headshot} className="Headshot" alt="headshot" />
          <h2 className="About-title">NICE TO MEET YOU</h2>
          <p className="Personal-intro">
          I’m a first year at UC Berkeley studying computer science, and I’m passionate about creating beautiful designs that help the world around me.
          </p>
        </div>
        <div className="Experience" id="experience">
          <h2 className="Experience-header">EXPERIENCE</h2>
          <div className="Experience-container">
            <Experiences 
              experiencetitle="Software Developer at CodeBase" 
              experiencedate="Aug. 2018 - Present"
              description="Creating a student tracking tool for teachers at Ygnacio Valley High School to effectively measure and monitor student data"
              image={codebase}
              alt="codebase"/> 
            <Experiences
              experiencetitle="Graphic Designer at Hong Kong Association of Southern California"
              experiencedate="2014 - Present"
              description="Design quarterly newsletters with readership of 500+ professional members; rebranded newsletters for readability and to maintain strong brand image; designed membership directories for 2017-2018 and 2018-2019, which contain 180+ pages"
              image={hkasc}
              alt="hkasc"
              />
            <Experiences 
              experiencetitle="Research Intern at the University of Southern California"
              experiencedate="June 2017 - Aug. 2017"
              description="Used Amira, ImageJ, VGStudio Max, and CT Pro to analyze clavicle bone properties of Gorilla, Pan troglodyte, and Homo fossils; calculated hundreds of cross-sectional geometries and trabecular bone properties; operated x-rays to scan bones for import"
              image={usc}
              alt="usc"/>
        </div>
          </div>
        <div className="Projects" id="projects">
          <h2 className="Project-header">PROJECTS</h2>
          <div className="Project-container">
            <Projects
              projecttitle="Wild"
              description="Designed promotional products for a member-original G-rated movie. Ranked fourth in the nation, first in California. Created in collaboration with Emily Wang"
              image={wild}
              alt="wild"/>
            <Projects
              projecttitle="FlavorBox"
              description="FlavorBox is a fresh produce and meal delivery service. Ranked first in California. Created in collaboration with Emily Wang."
              image={flavorbox}
              alt="flavorbox"/>
            <Projects
              projecttitle="HKASC Chinese New Year Invitation"
              description="2018 Chinese New Year Gala invitation created for the Hong Kong Association of Southern California"
              image={invitation}
              alt="invitation"/>
          </div>
        </div>
        <div className="Footer">
          <Footer className="Footer-link" name="EMAIL" link="mailto:bianca.lee@berkeley.edu"/>
          <Footer className="Footer-link" name="RESUMÉ" link={resume}/>
          <Footer className="Footer-link" name="LINKEDIN" link="https://www.linkedin.com/in/biancalee27/"/>
        </div>
        <div className="Bottom-space"></div>
      </div>
    );
  }
}

export default App;
