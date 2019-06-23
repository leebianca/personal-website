import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Header.css";
import Navigation from "./Navigation.js";

class Header extends Component {
  render() {
    return (
      <div className="Header-link-container">
        <a className="Header-link" href={this.props.link}>
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default Header;
