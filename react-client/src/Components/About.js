import React, { Component } from 'react';
import Bio from "./Bio.js";
import Headshot from './images/bruges.jpg';

class About extends Component {
  render() {
    return (
      <div className='titleContainer' id='aboutSection'>
        <div className='titleText'>
          ABOUT ME
        </div>
          <img className='image' src={Headshot} />
          <Bio />
      </div>
    )
  }
}

export default About;
