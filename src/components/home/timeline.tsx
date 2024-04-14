"use client"

import timelineElements from "./const/timelineElements"
import TimelineElement from "./timeline-element"

export default function Timeline() {
  return (
    <>
      <div className="text-white space-y-12 mt-6 px-4 overflow-clip">
        {timelineElements.map((item) => (
          <TimelineElement key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}
