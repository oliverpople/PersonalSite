import React, { Component } from 'react';
import Title from "./title.js";
import Headshot from './bruges.jpg';

class About extends Component {
  render() {
    return (
      <div className='titleContainer'>
        <div className='titleText'>
          About
        </div>
        <img className='image' src={Headshot} />
        <div id='titleBoxContainer'>
          <Title />
        </div>
      </div>
    )
  }
}
export default About;
