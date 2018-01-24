import React, { Component } from 'react';
import Form from "./Form";

class Contact extends Component {
  state = {
    formValues: {}
  }

  onSubmit = formValues => {
    console.log("Contact component received: ", formValues);
  }

  render() {
    return (
        <div className='titleContainer' id='contactContainer'>
          <div className='titleText'>
            GET IN TOUCH
          </div>
            <Form onSubmit={formValues => this.onSubmit(formValues)} />
        </div>
    )
  }
}

export default Contact;
