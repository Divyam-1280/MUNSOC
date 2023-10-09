import React from 'react';
import munsoclogoround from './../assets/munsocRound.png';
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Activity() {
  return (
    <div className="activity h-full">
        <h1 className="text-white">Activity</h1>
        <VerticalTimeline>
            {timelineElements.map((element) => {
                    return(
                        <VerticalTimelineElement key={element.key} icon={munsoclogoround}>
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.month}</h5>
                            <h5 className="vertical-timeline-element-subtitle">{element.agenda}</h5>
                            <p className="description">{element.description}</p>
                            <p className="winners">{element.winners}</p>
                        </VerticalTimelineElement>
                    )
                })}
        </VerticalTimeline>
    </div>
  )
}

export default Activity