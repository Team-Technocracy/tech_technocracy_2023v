import React from 'react'
import styles from './EventCard.module.css'

const EventCard = ({img,title,date,time,details}) => {
  return (
    <>
    <div className={styles.eventcardcard}>
        <img class={styles.eventcardimage} src={img} alt="Event Poster"></img>
        <div className={styles.eventcardcardtitle} style={{}}>
            {title}
        </div>
        <div className={styles.eventcardline}>
        </div>
        <div className={styles.eventcardcarddetails}>
            {details}
        </div>
        <div className={styles.eventcardcarddetails}>
            Date : {date}
        </div>
        <div className={styles.eventcardcarddetails}>
            Time : {time}
        </div>
        <div className={styles.aavartanbutton}>
            <button>Register</button>
        </div>
    </div>
    </>
  )
}

export default EventCard