import React from 'react'

function DocumentCard({Link,Img,Heading}) {
  return (
    <a href={Link}>
    <div className="wrapper h-28 w-80 md:w-80 my-6 bg-white rounded-lg flex hover:scale-110 transition-all ease-in-out duration-200">
      <div className="w-24 mt-2 ml-2 absolute">
        <img src={Img} alt="placeholder image" />
      </div>
      <div className="my-auto ml-32">
        <h3 className="docu-head text-xl mr-1">{Heading}</h3>
      </div>
    </div>
    </a>
  )
}

export default DocumentCard