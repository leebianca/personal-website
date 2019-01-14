import React, { Component } from 'react';
import './Projects.css';
import Project from './Project.js';

import portal from "./portal.png";
import where2meet from "./where2meet.png";
import p5 from "./p5.png";
import wild from "./wild.png";
import flavorbox from "./flavorbox.png";
import invitation from "./invitation.png";

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">
          {/* <h2 className="Project-header">PROJECTS</h2> */}
          <div className="Project-container">
            <a href="https://github.com/codebase-berkeley/teacher-portal" target="_blank"><Project
              projecttitle="Teacher Portal"
              description="Developed a teacher portal for a local high school where teachers can collect and manage student feedback. Created with Berkeley CodeBase"
              image={portal}
              alt="portal"/></a>
            <a href="https://github.com/isabelleyzhou/react-hack-2018" target="_blank"><Project
              projecttitle="Where2Meet"
              description="Developed a web app that helps users find a central meeting location with other users. Created with CalHacks team"
              image={where2meet}
              alt="where2meet"/></a>
            <a href="https://www.behance.net/gallery/73984671/Wild-Promotional-Items" target="_blank"><Project
              projecttitle="Wild"
              description="Designed promotional products for a member-original G-rated movie. Ranked fourth in the nation, first in California. Created in collaboration with Emily Wang"
              image={wild}
              alt="wild"/></a>
            <a href="https://github.com/leebianca/p5-project" target="_blank"><Project
              projecttitle="Vector Addition Visualization"
              description="Developed an interactive educational tool that visualizes vector addition"
              image={p5}
              alt="p5"/></a>
            <a href="https://www.behance.net/gallery/73985819/FlavorBox" target="_blank"><Project
              projecttitle="FlavorBox"
              description="Designed and developed a website for FlavorBox, a fresh produce and meal delivery service. Ranked first in California. Created in collaboration with Emily Wang."
              image={flavorbox}
              alt="flavorbox"/></a>
            <a href="https://www.behance.net/gallery/73985125/Hong-Kong-Association-of-Southern-California" target="_blank"><Project
              projecttitle="HKASC Graphic Design"
              description="Designed quarterly newsletters, membership directory, and the 2018 Chinese New Year Gala invitation for the Hong Kong Association of Southern California"
              image={invitation}
              alt="invitation"/></a>
          </div>
        </div>
    );
  }
}

export default Projects;
