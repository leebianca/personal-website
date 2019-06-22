import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="Project-container">
        <div className="Each-project">
          <img className="Project-photo" src={this.props.image} alt={this.props.alt}/>
          <div className="Overlay">
            <h2 className="Project-title">{this.props.projecttitle}</h2>
            <p className="Project-descrip">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
