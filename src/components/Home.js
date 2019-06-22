import React, { Component } from "react";

import "../App.css";
import arrow from "../assets/arrow.png";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <img className="arrow bounce" src={arrow} alt="arrow" />
        <div id="work">
          <Projects id="work" />
        </div>
      </div>
    );
  }
}

export default Home;
