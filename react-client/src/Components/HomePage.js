import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from "./title.js";
import Image from "./image.js";
import About from './About.js';
import Experience from './Experience.js';


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
        <section ref="section1">
          <Title />
          <Image />
        </section>
        <section ref="section2">
          <About />
        </section>
        <section ref="section3">
          <Experience />
        </section>
      </div>
    )
  }
}
export default HomePage;
