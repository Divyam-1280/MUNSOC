import React from 'react'
import AchievementCard from './AchievementCard'
import Chai from './../assets/Chai.jpg'
import Bhub from './../assets/Bhub.jpg'

function AchievementRow1() {
  return (
    <div className="flex sm:flex-row flex-col sm:h-48 bg-red-500 sm:justify-evenly items-center">
        <AchievementCard Img={Chai} Clgname={"IIT Guwahati"} Prize={"High Commendation"} Name={"Chaitanya Raj"} Committee={"DISEC"} Portfolio={"Ukraine"} />
        <AchievementCard Img={Bhub} Clgname={"IIT Bhubaneswar"} Prize={"High Commendation"} Name={"Varun Srivastava and Divyam Raj Singh"} Committee={"DISEC"} Portfolio={"Ukraine"} />
    </div>
  )
}

export default AchievementRow1