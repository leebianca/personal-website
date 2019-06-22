import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import resume from "./assets/Resume.pdf";
import Home from "./components/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ACTransit from "./components/ACTransit/ACTransit";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <a className="bianca" href="/">
            BIANCA LEE
          </a>
          <div className="Navigation">
            <Header className="Header-link" name="about" link="/about" />
            <Header className="Header-link" name="work" link="/#work" />
            <Header className="Header-link" name="resumé" link={resume} />
            <Header className="Header-link" name="contact" link="/#contact" />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ac-transit" component={ACTransit} />
          <div id="contact">
            <Footer id="contact" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
