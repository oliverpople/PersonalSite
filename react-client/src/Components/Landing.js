import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import ScrollArrow from './ScrollArrow';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state={
      messages:[
        "Bonjour.           ",
        "Hello.           ",
      ],
      index:0,
      erase:1,
    }
  }

  typeIsDone(){
    if (this.state.index + 1 == this.state.messages.length) {
      return
    } else if (this.state.erase == -1) {
      if (this.state.index + 1 >= this.state.messages.length) {
        this.setState({
          erase: 0.5,
          index: 0
        })
    } else {
      this.setState({
        erase: 0.5,
        index: this.state.index + 1
      });
    }
    } else {
      this.setState({
        erase: -1
      })
    }
  }

  render() {

    return (
      <div id="landingContainer">
        <div id="landingContent">
          <TypeWriter
            onTypingEnd={this.typeIsDone.bind(this)}
            initDelay={2000}
            typing={this.state.erase}>
            <h2>{this.state.messages[this.state.index]}</h2>
          </TypeWriter>
        </div>
          <ScrollArrow />
      </div>
    )
  }

}

export default Landing;
