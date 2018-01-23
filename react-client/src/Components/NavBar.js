import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Sticky >
        <header>
            <span className="navButton">
              <Link to="/#section1" className="navLink">
                Home
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section4" className="navLink">
                Contact
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section3" className="navLink">
                Experience
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section2" className="navLink">
                About
              </Link>
            </span>
        </header>
      </ Sticky>
    )
  }
}

export default NavBar;
