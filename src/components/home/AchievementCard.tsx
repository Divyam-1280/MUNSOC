import React from "react";
import "@/app/index.css";
import Image from "next/image";

export default function AchievementCard({
  imgSrc,
  collegeName,
  name,
  prize,
  committee,
  portfolio,
}: {
  imgSrc: string;
  collegeName: string;
  name: string;
  prize: string;
  committee: string;
  portfolio: string;
}) {
  return (
    <div className="card text-black">
      <div className="imgbx">
        <Image src={imgSrc} height={240} width={480} alt={name} />
      </div>
      <div className="content">
        <h2>{collegeName}</h2> <br />
        <div>
          <h4 className="font-bold -mt-4 mb-2">{prize}</h4>
        </div>
        <span className="text-sm ">
          {name}
          <br />
          {committee} <br />
          {portfolio}{" "}
        </span>
      </div>
    </div>
  );
}
