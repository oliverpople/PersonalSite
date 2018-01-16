import React, { Component } from 'react';
import bruges from './bruges.jpg';

class Image extends Component {
  render() {
    return (
        <div>
        	<img className='headshot' src={require('./bruges.jpg')} />
      	</div>
    )
  }
}
export default Image;
