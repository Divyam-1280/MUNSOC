import React from 'react'

function AchievementCard({Img,Clgname,Prize,Name,Committee,Portfolio}) {
  return (
    <div className="card">
        <div className="imgbx">
            <img src={Img} alt={Name} />
        </div>
        <div className="content">
            <h2>{Clgname}</h2> <br />
            <p><h4>{Prize}</h4></p>
            <h5>{Name}<br /> Committee - {Committee} <br /> Portfolio - {Portfolio} </h5>
        </div>
    </div>
  )
}

export default AchievementCard