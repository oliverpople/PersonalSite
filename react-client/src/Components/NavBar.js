import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';

class NavBar extends Component {

  render() {
    return (
      <Sticky >
        <header>
            <span className="navButton" id="homeButton">
              <Link to="/#section1" className="navLink">
                HOME
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section4" className="navLink">
                CONTACT
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section3" className="navLink">
                EXPERIENCE
              </Link>
            </span>
            <span className="navButton">
              <Link to="/#section2" className="navLink">
                ABOUT
              </Link>
            </span>
        </header>
      </ Sticky>
    )
  }

}

export default NavBar;
