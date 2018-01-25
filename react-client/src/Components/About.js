import React, { Component } from 'react';
import Bio from "./Bio.js";
import Headshot from './bruges.jpg';
import Profile from "./Profile.js";

class About extends Component {
  render() {
    return (
      <div className='titleContainer' id='aboutSection'>
        <div className='titleText'>
          ABOUT ME
        </div>
          <img className='image' src={Headshot} />
          <Profile />
          <Bio />
      </div>

    )
  }
}
export default About;
