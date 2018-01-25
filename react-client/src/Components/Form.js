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
        className="formInput"
        name="name"
        placeholder='NAME'
        value={this.state.name}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        className="formInput"
        name="emailAddress"
        placeholder='EMAIL'
        value={this.state.emailAddress}
        onChange={e => this.change(e)}
        />
        <br />
        <textarea
        className="formInput"
        name="text"
        placeholder='MESSAGE'
        value={this.state.text}
        onChange={e => this.change(e)}
        />
        <br />
        <button id="submitButton" onClick={e => this.onSubmit(e)}>Send Message</button>
      </form>
    );
  }
}
