import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

import Form from "./Form";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
              <Form />
        </div>
      </Router>
    )
  }
}

export default App;
