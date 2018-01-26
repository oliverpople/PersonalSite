import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Experience extends Component {

  render() {
    return (
      <div>
        <div className='titleContainer'>
          <div className='titleText'>
            EXPERIENCE
          </div>
        </div>
        <Timeline id="timeLine">
          <TimelineEvent className='timelineEvents' id='makersEvent' title="Makers Academy | (Sept 2017 - Dec 2017)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            A highly selective 12-week intensive coding Bootcamp with a focus on:
            <li>TDD</li>
            <li>Pair programming</li>
            <li>Agile/XP</li>
            <li>OOP</li>
            <li>Ruby, Rails, JavaScript, Node.js</li>
            <li>RSpec, Jasmine</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents'title="Creative Brand Strategist, Grey London | (Apr 2014 - Aug 2017)"
            icon={<i class="fa fa-briefcase" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>Developing integrated brand strategies for Gillette Global, Gillette UK and Sixt UK.</li>
            <li>Responsible for creating and articulating strategic direction to senior clients.</li>
            <li>Commissioning and/or moderating qualitative and quantitative consumer research.</li>
            <li>Collaborating with creative teams to develop work for TV, OOH, print, radio, online and social media.</li>
            <li>Measuring the effectiveness of campaigns through the line.</li>            <li>Writing several award-winning papers on campaign strategy and effectiveness for Sixt UK. Including, an APG Award, Silver IPA Award and Silver UK Effie.</li>
            <li>Working on several winning new Business pitches including Jacobs crackers and Emirates Airlines.</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' title="Design Kit: in partnership with IDEO.ORG | (April 2016 – May 2016)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>The Course for Human-Centered Design: Certified</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' title="Institute of Practitioners in Advertising | (Feb 2015)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>IPA Foundation Certificate: Distinction</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' title="Marketing Agencies Association (MAA) | (Feb 2013 – Sept 2013)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>MAA Diploma in Integrated Marketing 2013: Distinction</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' title="Account Executive, iris Worldwide | (Jul 2012 - Sept 2013)"
            icon={<i class="fa fa-briefcase" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>Worked directly with clients managing the accounts Barclays Partner Finance (BPF) and PHILIPS Sound.</li>
            <li>For PHILIPS Sound I developed a new content strategy that was better suited to the platform and successfully improved user engagement.</li>
            <li>For BPF’s I overlooked their entire rebranding and helped grew annual revenue by approximately 100%.</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' title="University of Nottingham | (Sept 2008 - July 2012)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>BA (Hons) Philosophy: 2.1</li>
            <li>Included a module in ‘Formal logic’.</li>
            <li>Winner of the Nottingham Student Venture Challenge 2012, where we pitched our idea to a panel of external judges. My partner and I were awarded a £1000 Entrepreneurial grant to develop our idea further.</li>
            <li>I also spent a lot of time in my room producing monotonous techno music with the sequencing software Ableton Live.</li>
          </TimelineEvent>
          <TimelineEvent className='timelineEvents' id='cliftonEvent' title="Clifton College, Bristol | (Sept 2002 – May 2007)"
            icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
            container="card"
            iconColor="black"
            bubbleStyle={{backgroundColor: "white"}}
            cardHeaderStyle={{backgroundColor: "black", color: "white"}}
          >
            <li>A Levels: Economics A, Chemistry A, Biology A.</li>
          </TimelineEvent>
        </Timeline>
      </div>
    )
  }
}

export default Experience;
