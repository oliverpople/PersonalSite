import React, { Component } from 'react';
import Helvetica from './helvetica.jpg';

class About extends Component {
  render() {
    return (
      <div>
        This is the About section
        <img className='image' src={Helvetica} />
      </div>
    )
  }
}
export default About;
