import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from "./title.js";
import Image from "./image.js";
import BioPage from './BioPage.js';

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
          <BioPage />
        </section>
      </div>
    )
  }
}
export default HomePage;
