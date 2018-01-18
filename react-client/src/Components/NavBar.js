import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Sticky >
        <header>
          <div id="headerButtons">
            <span className="navButton">
              <Link to="/#section1" className="navLink">
                Home
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section2" className="navLink">
                About
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section3" className="navLink">
                Experience
              </Link>
            </span>
          </div>
        </header>
      </ Sticky>
    )
  }
}

export default NavBar;
