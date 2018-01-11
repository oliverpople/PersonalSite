import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <ul id='headerButtons'>
          <li classname="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default Navbar;
