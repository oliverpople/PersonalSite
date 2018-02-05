import React, { Component } from 'react';

class Bio extends Component {

  render() {
    return (
      <div id='bioBoxContent'>
        <h1>I'M OLLIE!</h1>
          <br></br>
        <a>I have just finished a Software Development boot camp in London, UK.
        I am passionate about problem-solving and I believe that all code should
        be well designed, intuitive, and flexible in the face of change.</a>
          <br></br>
          <br></br>
        <a>I aim to maintain an up to date knowledge of the most current web trends
        and best practices. Javascript is priority number one for me at the moment
        and I am always trying to familiarise myself with the latest frameworks.
        In fact, this very site is my first ever attempt at using React.js. However,
        I’m not always glued to the screen - I also enjoy hiking,
        martial arts, gymnastics, cooking, and taking as many trips abroad as
        my finances will allow.</a>
          <br></br>
          <br></br>
        <a>I am in the process of a big move and currently seeking new opportunities
        in Vancouver, BC. If you think I'd be a good fit for your business or you'd
        just like to have a chat about opportunities- use the Contact section below to
        get in touch!</a>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Bio;
