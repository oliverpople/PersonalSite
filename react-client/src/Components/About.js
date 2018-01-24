import React, { Component } from 'react';
import Bio from "./Bio.js";
import Headshot from './bruges.jpg';

class About extends Component {
  render() {
    return (
      <div className='titleContainer'>
        <div className='titleText'>
          About
        </div>
        <img className='image' src={Headshot} />
        <div id='bioBoxContainer'>
          <Bio />
        </div>
      </div>
    )
  }
}
export default About;
