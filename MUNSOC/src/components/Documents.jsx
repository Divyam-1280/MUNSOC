import React from 'react'
import DocumentCard from './DocumentCard'
import UNlogo from './../assets/UNlogo.png'
import Timeline from './../assets/timeline.jpg'
import Partition from './../assets/partition.png'
function Documents() {
  return (
    <div className="documents h-full">
        <div className="w-screen h-24 flex items-center justify-center mt-6" data-aos="fade-up" data-aos-duration="800">
          <h1 className="docu-head lg:text-6xl text-4xl">Documents</h1>
        </div>
        <div className="w-screen mt-14 mb-20 flex md:flex-row flex-col justify-around items-center">
            <DocumentCard Link={"https://drive.google.com/file/d/1Fikjl8qhAi2Dt67vtKRnwdQHqWz2uvOs/view?usp=drive_link"} Img={UNlogo} Heading={"General Study Guide"}/>
            <DocumentCard Link={"https://drive.google.com/file/d/1DySIKpVUddy3TFYQQhYd4w7JP1P47bvb/view?usp=drive_link"} Img={Timeline} Heading={"Timeline"}/>
            <DocumentCard Link={"https://drive.google.com/file/d/1gu5N8duqmYiDWsQUZ3iwhInsdghC0iMK/view?usp=drive_link"} Img={Partition} Heading={"Background Guide - Partition of India"}/>
        </div>
    </div>
  )
}

export default Documents