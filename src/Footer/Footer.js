import React, { Component } from 'react';
import './Footer.css';
import Footerlink from './Footerlink.js';

import resume from "./Resume.pdf";
import linkedin from "./linkedin.png";
import github from "./github.png";
import behance from "./behance.png";

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
          <h2 className="getintouch">Connect with me!</h2>
          <div className="email-container">
            <a className="email" href = "mailto: bianca.lee@berkeley.edu">bianca.lee@berkeley.edu</a>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/biancalee27/" target="_blank"><img className="link" src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/leebianca" target="_blank"><img className="link" src={github} alt="github"/></a>
            <a href="https://www.behance.net/biancalee" target="_blank"><img className="link" src={behance} alt="behance"/></a>
          </div>
        </div>
    );
  }
}

export default Footer;
