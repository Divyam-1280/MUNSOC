import React from 'react'

function HeaderItem({name,id}){
  return (
    <a href={id}>
    <div className="text-white flex items-center gap-2 md:gap-3 md:text-lg text-sm font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 bg-transparent hover:text-yellow-400 scroll-smooth">
        <h2 className="bg-transparent">{name}</h2>
    </div>
    </a>
  )
}

export default HeaderItem