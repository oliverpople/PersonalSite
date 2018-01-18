import React, { Component } from 'react';
import Helvetica from './helvetica.jpg';

class Experience extends Component {
  render() {
    return (
      <div className='title'>
        Experience
        CV CV CV
        <img className='image' src={Helvetica} />
      </div>
    )
  }
}
export default Experience;
