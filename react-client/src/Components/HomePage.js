import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import Landing from './Landing.js';
import NavBar from './NavBar.js';

class HomePage extends Component {

  componentDidMount() {
		this.scrollToHash();
	}

	componentDidUpdate() {
		this.scrollToHash();
	}

	scrollToHash() {
	  let hash = this.props.location.hash.replace('#', '');
	  if (hash) {
	     let node = ReactDOM.findDOMNode(this.refs[hash]);
	        if (node) {
	           node.scrollIntoView();
	        }
	    }
	}

  render() {
    return (
      <div>
        <div ref="section1">
          <Landing />
        </div>
        <div ref="section2">
          <NavBar />
          <About />
        </div>
        <div ref="section3">
          <Experience />
        </div>
        <div ref="section4">
          <Contact />
        </div>
      </div>
    )
  }

}

export default HomePage;
