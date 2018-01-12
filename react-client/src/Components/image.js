import React, { Component } from 'react';
import oliver_pople from './oliver_pople.jpg';

class Image extends Component {
  render() {
    return (
      <div>
      Hello!
        return  <img src={require('./oliver_pople.jpg')} />
      </div>
    )
  }
}
export default Image;
