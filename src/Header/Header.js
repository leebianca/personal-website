import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header-link-container">
            <a className="Header-link" href={this.props.link}>{this.props.name}</a>
      </div>
    );
  }
}

export default Header;
