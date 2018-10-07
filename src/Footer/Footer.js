import React, { Component } from 'react';
import './Footer.css';
import Footerlink from './Footerlink.js';

import resume from "./Resume.pdf";

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
          <Footerlink className="Footer-link" name="EMAIL" link="mailto:bianca.lee@berkeley.edu"/>
          <Footerlink className="Footer-link" name="RESUMÉ" link={resume}/>
          <Footerlink className="Footer-link" name="LINKEDIN" link="https://www.linkedin.com/in/biancalee27/"/>
        </div>
    );
  }
}

export default Footer;
