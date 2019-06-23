import React, { Component } from "react";
import "./Landing.css";
import background from "../../assets/iconbackground.png";
import body from "../../assets/iconbody.png";
import laptop from "../../assets/laptopicon.png";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <h1 className="Hello">Hello!</h1>
          <h3 className="intro">
            I'm a second-year at UC Berkeley studying computer science, and I’m
            passionate about creating beautiful designs that help the world
            around me.
          </h3>
          <div className="button-wrapper">
            <button className="button" type="button">
              developer
            </button>
            <button className="button" type="button">
              designer
            </button>
            <button className="button" type="button">
              learner
            </button>
          </div>
        </div>
        <div className="icon">
          <img src={background} className="icon-background" />
          <img src={body} className="icon-body translate" />
          <img src={laptop} className="laptop" />
        </div>
      </div>
    );
  }
}

export default Landing;
