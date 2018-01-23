import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='iconLinksContainer'>
          <a>© 2018, Oliver. All Rights Reserved.</a>
          <br></br>
          <i> Connect with me </i>
          <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
        </div>
      </footer>
    )
  }
}

export default Footer;
