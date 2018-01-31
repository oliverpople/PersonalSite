import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (

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

    )
  }

}

export default NavBar;
