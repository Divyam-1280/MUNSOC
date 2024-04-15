"use client"

import Image from 'next/image';
import { useRef } from "react";
import { useInView } from "framer-motion";

function CardInView({
  children
}: {
  children: React.ReactNode,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div style={{
        transform: isInView ? "none" : "translateX(+200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}>
        {children}
      </div>
    </div>
  )
}

export default function TimelineElement({
  title,
  month,
  agenda,
  description,
  winners
}: {
  title: string,
  month: string,
  agenda: string,
  description: string,
  winners: string,
}) {

  return (
    <CardInView>
      <div className="text-black sm:flex justify-between gap-x-4">
        <div className='min-w-fit max-w-sm text-slate-700 px-8 flex flex-col gap-y-3 items-start'>
          <h3 className='mb-2 text-2xl lg:text-3xl font-black tracking-wide text-white'>
            {month}
          </h3>
        </div>

        <div className="max-w-lg bg-yellow-400 border-b-4 border-b-stone-200 p-4 px-6 rounded-md space-y-4">
          <Image src="/MUNSOClogo.png" width={64} height={64} alt="logo" />
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <h3 className="text-lg font-bold">{agenda}</h3>
          <p className="text-pretty">{description}</p>
          <span className="font-bold text-sm">{winners}</span>
        </div>
      </div>
    </CardInView>
  )
};
