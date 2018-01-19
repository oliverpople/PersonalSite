import React, { Component } from 'react';
import $ from 'jquery';

export default class Form extends Component {
  state = {
    name: "",
    emailAddress: "",
    text: ""
  };
    change = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
    };

    onSubmit = (e) => {

      e.preventDefault();

      this.props.onSubmit(this.state);

      var data = {
        name: this.state.name,
        emailAddress: this.state.emailAddress,
        text: this.state.text
      }

      $.ajax({
        type: 'POST',
        url: '/',
        dataType: 'json',
        data: data,
        success: function (data) {
                console.log('Submission was successful.');
                console.log(data); // keep?
              }
      })

      this.setState({
        name: "",
        emailAddress: "",
        text: ""
      });

    };


  render() {
    return (
      <form>
        <input
        name="name"
        placeholder='Name'
        value={this.state.name}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name="emailAddress"
        placeholder='Email address'
        value={this.state.emailAddress}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name="text"
        placeholder='Message'
        value={this.state.text}
        onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
