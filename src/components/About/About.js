import React, { Component } from "react";
import "./About.css";

import headshot from "./headshot.jpg";

class About extends Component {
  render() {
    return (
      <div className="About">
        <img src={headshot} className="Headshot" alt="headshot" />
        <h2 className="About-title">Nice to meet you!</h2>
        <p className="Personal-intro">
          I'm a second-year undergrad from Southern California studying Computer
          Science at UC Berkeley. This summer, I'm working as a software
          engineer intern at&nbsp;
          <a
            href="https://www.letseat.company/"
            target="_blank"
            className="letseat text"
          >
            Let's Eat!
          </a>
          . On campus, you can find me as a software developer at&nbsp;
          <a
            href="https://codebase.berkeley.edu"
            target="_blank"
            className="codebase text"
          >
            Berkeley Codebase
          </a>
          &nbsp;and as a graphic designer for&nbsp;
          <a
            href="https://innovativedesign.club/"
            target="_blank"
            className="innod text"
          >
            Innovative Design
          </a>
          .
          <br />
          <br />
          In the future, I hope to find myself in the intersection of software
          development and design, creating platforms that bring people together.
          <br />
          <br />
          In my free time, I enjoy shopping for stationery, traveling, and
          writing{" "}
          <a
            href="https://biancalee.yelp.com"
            target="_blank"
            className="lessbold-text"
          >
            Yelp
          </a>{" "}
          reviews. Some of my favorite things include{" "}
          <a
            href="https://www.netflix.com/title/80134781"
            target="_blank"
            className="lessbold-text"
          >
            Homecoming King
          </a>
          , night drives, and mango bingsoo.
        </p>
      </div>
    );
  }
}

export default About;
