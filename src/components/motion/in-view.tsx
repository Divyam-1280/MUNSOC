"use client"

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function InView({
  children
}: {
  children: React.ReactNode,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-full">
      <div className="h-full" style={{
        transform: isInView ? "none" : "translateX(+200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}>
        {children}
      </div>
    </div>
  )
}
