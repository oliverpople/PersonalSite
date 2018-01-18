import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props){
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      };
    }


  render() {
    return (
      <form>
        <input placeholder='FirstName' value={this.state.firstName} />
      </form>
    );
  }
}
