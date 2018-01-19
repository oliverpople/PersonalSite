import React, { Component } from 'react';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

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

      var formdata = {
        name: this.state.name,
        emailAddress: this.state.emailAddress,
        text: this.state.text
      }

      $.ajax({
        type: 'POST',
        url: '/contact',
        data: JSON.stringify(formdata),
        contentType:"application/json; charset=utf-8",
        dataType: 'json',
        success: function (data) {
                console.log('Contact json submission was successful.');
                console.log('ajax fomrdata', data); // keep?
              }
      });

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
