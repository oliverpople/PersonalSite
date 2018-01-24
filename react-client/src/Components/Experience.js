import React, { Component } from 'react';
import Helvetica from './helvetica.jpg';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Experience extends Component {
  render() {
    return (
      <div>
        <div className='titleContainer'>
          <div className='titleText'>
            Experience
          </div>
        </div>
        <Timeline id="timeLine">
          <TimelineEvent title="John Doe sent a SMS"
            icon={<i class="fa fa-briefcase" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            Details go here.
          </TimelineEvent>
          <TimelineEvent title="John Doe sent a SMS"
            icon={<i class="fa fa-briefcase" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            Details go here.
          </TimelineEvent>
        </Timeline>
      </div>
    )
  }
}

export default Experience;
