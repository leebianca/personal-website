import React, { Component } from 'react';
import './Experiences.css';

class Experiences extends Component {
  render() {
    return (
      <div className="Experience-container">
        <div className="Experience-block">
            <img className="Experience-photo" src={this.props.image} alt={this.props.alt}/>
            <div className="Explanation">
                <h2 className="Experience-title">{this.props.experiencetitle}</h2>
                <p className="Experience-date">{this.props.experiencedate}</p>
                <p className="Experience-descrip">{this.props.description}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
