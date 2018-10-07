import React, { Component } from 'react';
import './Projects.css';
import Project from './Project.js';

import wild from "./wild.png";
import flavorbox from "./flavorbox.png";
import invitation from "./invitation.png";

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">
          <h2 className="Project-header">PROJECTS</h2>
          <div className="Project-container">
            <Project
              projecttitle="Wild"
              description="Designed promotional products for a member-original G-rated movie. Ranked fourth in the nation, first in California. Created in collaboration with Emily Wang"
              image={wild}
              alt="wild"/>
            <Project
              projecttitle="FlavorBox"
              description="FlavorBox is a fresh produce and meal delivery service. Ranked first in California. Created in collaboration with Emily Wang."
              image={flavorbox}
              alt="flavorbox"/>
            <Project
              projecttitle="HKASC Chinese New Year Invitation"
              description="2018 Chinese New Year Gala invitation created for the Hong Kong Association of Southern California"
              image={invitation}
              alt="invitation"/>
          </div>
        </div>
    );
  }
}

export default Projects;
