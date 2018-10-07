import React, { Component } from 'react';
import './Experiences.css';
import Experience from './Experience.js';

import codebase from './codebase.jpg';
import usc from './usc.jpg';
import hkasc from "./hkasc.png";

class Experiences extends Component {
  render() {
    return (
      <div className="Experience" id="experience">
      <h2 className="Experience-header">EXPERIENCE</h2>
      <div className="Experience-container">
        <Experience 
          experiencetitle="Software Developer at CodeBase" 
          experiencedate="Aug. 2018 - Present"
          description="Creating a student tracking tool for teachers at Ygnacio Valley High School to effectively measure and monitor student data"
          image={codebase}
          alt="codebase"/> 
        <Experience
          experiencetitle="Graphic Designer at Hong Kong Association of Southern California"
          experiencedate="2014 - Present"
          description="Design quarterly newsletters with readership of 500+ professional members; rebranded newsletters for readability and to maintain strong brand image; designed membership directories for 2017-2018 and 2018-2019, which contain 180+ pages"
          image={hkasc}
          alt="hkasc"
          />
        <Experience
          experiencetitle="Research Intern at the University of Southern California"
          experiencedate="June 2017 - Aug. 2017"
          description="Used Amira, ImageJ, VGStudio Max, and CT Pro to analyze clavicle bone properties of Gorilla, Pan troglodyte, and Homo fossils; calculated hundreds of cross-sectional geometries and trabecular bone properties; operated x-rays to scan bones for import"
          image={usc}
          alt="usc"/>
      </div>
      </div>
    );
  }
}

export default Experiences;
