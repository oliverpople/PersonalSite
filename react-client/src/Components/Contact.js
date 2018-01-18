import React, { Component } from 'react';
import Form from "./Form";

class Contact extends Component {

  onSubmit = values => {
    console.log("Contact component: ", values);
  }

  render() {
    return (
        <div className='title'>
          Contact
          <Form onSubmit={values => this.onSubmit(values)} />
        </div>
    )
  }
}

export default Contact;
