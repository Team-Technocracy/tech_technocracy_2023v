import React from 'react'
import './EventCard.css'

const EventCard = ({img,title,date,time,details}) => {
  return (
    <>
    <div className="eventcard-card">
        <img class='eventcard-image' src={img} alt="Event Poster"></img>
        <div className="eventcard-cardtitle" style={{}}>
            {title}
        </div>
        <div className="eventcard-line">
        </div>
        <div className="eventcard-carddetails">
            {details}
        </div>
        <div className="eventcard-carddetails">
            Date : {date}
        </div>
        <div className="eventcard-carddetails">
            Time : {time}
        </div>
        <div className="aavartan-button">
            <button>Register</button>
        </div>
    </div>
    </>
  )
}

export default EventCard