import React from 'react'
import AchievementCard from './AchievementCard'
import Chai from './../assets/Chai.jpg'
import Bhub from './../assets/Bhub.jpg'
import Megh from './../assets/meghalaya.jpg'

function AchievementRow1() {
  return (
    <div className="flex sm:flex-row flex-col sm:h-48 sm:justify-evenly items-center max-sm:gap-20">
        <AchievementCard Img={Chai} Clgname={"IIT Guwahati"} Prize={"High Commendation"} Name={"Chaitanya Raj"} Committee={"Committee - DISEC"} Portfolio={"Portfolio - Ukraine"} />
        <AchievementCard Img={Bhub} Clgname={"IIT Bhubaneswar"} Prize={"High Commendation"} Name={"Varun Srivastava and Divyam Raj Singh"} Committee={"Committee - DISEC"} Portfolio={"Portfolio - Ukraine"} />
        <AchievementCard Img={Megh} Clgname={"Meghalaya MUN"} Prize={"Special Mentions and Verbal Mentions"} Name={"Amitabh, Harish, Anshuman, Siddhant, Sumit, Varun, Priyanshu and Rudransh"} Committee={" "} Portfolio={" "} />
    </div>
  )
}

export default AchievementRow1