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
        placeholder='Your name...'
        value={this.state.name}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        className="formInput"
        name="emailAddress"
        placeholder='Your email address...'
        value={this.state.emailAddress}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        className="formInput"
        id='textField'
        name="text"
        placeholder='Your message...'
        value={this.state.text}
        onChange={e => this.change(e)}
        />
        <br />
        <button id="submitButton" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
