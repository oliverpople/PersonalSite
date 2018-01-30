import React, { Component } from 'react';
import Bio from "./Bio.js";

class About extends Component {
  render() {
    return (
      <div className='titleContainer' id='aboutSection'>
        <div className='titleText'>
          ABOUT ME
        </div>
          <img className='image' src={require("../images/bruges.jpg")} />
          <Bio />
      </div>
    )
  }
}

export default About;
