import { StaticImageData } from 'next/image'
import React from 'react'
import InView from '../motion/in-view'

function DocumentCard({ Link, Img, Heading }: { Link: string, Img: StaticImageData, Heading: string }) {
  return (
    <InView>
      <a href={Link}>
        <div className="wrapper h-28 w-80 md:w-80 bg-white rounded-lg flex hover:scale-110 transition-all ease-in-out duration-200" >
          <div className="w-24 mt-2 ml-2 absolute">
            <img src={Img.src} alt="placeholder image" />
          </div>
          <div className="my-auto ml-32">
            <h3 className="docu-head text-xl mr-1">{Heading}</h3>
          </div>
        </div>
      </a>
    </InView>
  )
}

export default DocumentCard
