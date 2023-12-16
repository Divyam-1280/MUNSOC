import React from "react";
import munsoclogoround from "./../assets/munsocRound.png";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Activity() {
  return (
    <div className="activity h-full cursor-default" id="Activity">
      <div
        className="md:text-6xl text-xl flex justify-center mb-20 mt-6 activity-head"
        data-aos="fade-up"
        data-aos-duration="800">
        <h1 className="text-white">Activity</h1>
      </div>
      <VerticalTimeline className="costum-line font-sans">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              icon={<img src={munsoclogoround} />}
              contentStyle={{ background: "#ffd000" }}
              contentArrowStyle={{ borderRight: "7px solid #ffd000" }}>
              <h3 className=" text-xl font-bold">{element.title}</h3>
              <h5 className="text-lg font-medium mt-1">{element.month}</h5>
              <h5 className="mt-3 text-base font-semibold">{element.agenda}</h5>
              <h5 className="font-normal mt-3">{element.description}</h5>
              <h5 className="font-semibold text-sm mt-4">{element.winners}</h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Activity;
