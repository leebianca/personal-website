import React, { Component } from 'react';
import './About.css';

import headshot from './headshot.jpg';

class About extends Component {
    render() {
      return (
        <div className="About">
                <img src={headshot} className="Headshot" alt="headshot" />
                {/* <h2 className="About-title">NICE TO MEET YOU</h2> */}
                <p className="Personal-intro">
                I’m a first year at UC Berkeley studying computer science, and I’m passionate about creating beautiful designs that help the world around me.
                </p>
                </div>
        );
    }
}

export default About;


