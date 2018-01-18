import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  };


    change = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
    };

  render() {
    return (
      <form>
        <input
        name="firstName"
        placeholder='FirstName'
        value={this.state.firstName}
        onChange={e => this.change(e)}
        />
        <input
        name="lastName"
        placeholder='LastName'
        value={this.state.lastName}
        onChange={e => this.change(e)}
        />
        <input
        name="userName"
        placeholder='UserName'
        value={this.state.userName}
        onChange={e => this.change(e)}
        />
        <input
        name="email"
        placeholder='Email'
        value={this.state.email}
        onChange={e => this.change(e)}
        />
        <input
        name="password"
        placeholder='Password'
        value={this.state.password}
        onChange={e => this.change(e)}
        />
      </form>
    );
  }
}
