import React, { Component } from 'react';
import Headshot from './bruges.jpg';
import Helvetica from './helvetica.jpg';

class Image extends Component {
constructor(props) {
  super(props)
    this.state = {
      headshot: Headshot,
      helvetica: Helvetica
    }
  }

  render() {
    return (
        <div>
        	<img className='headshot' src={this.state.helvetica} />
      	</div>
    )
  }
}
export default Image;
