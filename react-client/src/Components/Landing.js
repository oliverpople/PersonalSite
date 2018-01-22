import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

class Landing extends Component {
  render() {
    return (
      <div id="landingContainer">
        <div id="landingContent">
          <TypeWriter typing={0.5}>Hello World!</TypeWriter>
        </div>
      </div>
    )
  }
}

export default Landing;
