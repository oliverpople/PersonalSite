import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='iconLinksContainer'>
          <i>© 2018, Oliver. All Rights Reserved.</i>
          <br></br>
          <i> Connect with me </i>
          <a href="https://www.linkedin.com/in/oliverpople/"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://github.com/oliverpople"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
        </div>
      </footer>
    )
  }
}

export default Footer;
