import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer>
        <div className='footerContentContainer'>
          <a> Connect with me </a>
          <a href="https://www.linkedin.com/in/oliverpople/"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          <a>   </a>
          <a href="https://github.com/oliverpople"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
        </div>
        <div className='footerContentContainer'>
          <i id='copyright'>© 2018, Oliver. All Rights Reserved.</i>
        </div>
      </footer>
    )
  }
}

export default Footer;
