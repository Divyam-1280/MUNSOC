import React from "react";
import DocumentCard from "./DocumentCard";
import UNlogo from "@/assets/UNlogo.png";
import Timeline from "@/assets/timeline.jpg";
import Research from "@/assets/Research.jpg";
function Documents() {
  return (
    <div className="documents h-full" id="documents">
      <div
        className="w-full h-24 flex items-center justify-center my-6"
        data-aos="fade-up"
        data-aos-duration="800">
        <h1 className="docu-head lg:text-6xl text-4xl cursor-default text-black">
          Documents
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-11 my-14 items-center text-black">
        <DocumentCard
          Link={
            "https://drive.google.com/file/d/1Fikjl8qhAi2Dt67vtKRnwdQHqWz2uvOs/view?usp=drive_link"
          }
          Img={UNlogo}
          Heading={"General Study Guide"}
        />
        <DocumentCard
          Link={
            "https://drive.google.com/file/d/1ZyeRFCZXOTrPhrEOM5LFzltmNmI018yB/view?usp=sharing"
          }
          Img={Timeline}
          Heading={"Timeline"}
        />
        <DocumentCard
          Link={
            "https://drive.google.com/file/d/1BJ6HP2-1Y8yoYjLcQKwcjArpNLel00gH/view?usp=drive_link"
          }
          Img={Research}
          Heading={"Strategy and Research Guide"}
        />
      </div>
    </div>
  );
}

export default Documents;
