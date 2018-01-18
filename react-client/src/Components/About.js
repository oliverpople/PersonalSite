import React, { Component } from 'react';
import Helvetica from './helvetica.jpg';

class About extends Component {
  render() {
    return (
      <div className='title'>
        About
        <img className='image' src={Helvetica} />
      </div>
    )
  }
}
export default About;
