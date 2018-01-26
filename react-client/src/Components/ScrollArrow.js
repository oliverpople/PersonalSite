import React, { Component } from 'react';
import ReactDelayRender from 'react-delay-render';

class ScrollArrow extends Component {

  render() {
    return (
      <div class="arrow bounce">
        <a class="fa fa-arrow-down fa-2x" href="#"></a>
      </div>
    )
  }
  
}
export default ReactDelayRender({ delay: 5000 })(ScrollArrow);
