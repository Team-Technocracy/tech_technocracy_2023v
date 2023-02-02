import React from 'react'
import styles from './EventCard.module.css'
import {Link} from 'react-router-dom';

const EventCard = ({id, img, title, date, time, details,venue, regis }) => {
    const url = "/register/" + title.replaceAll(' ','');
    
    let btn;
    if(regis==1){btn= "Register";}
    else{btn= "Details"};
    
    return (
        <>
            <div className={styles.eventcardcard}>
                <img class={styles.eventcardimage} src={img} alt="Event Poster"></img>
                <div className={styles.eventdetails}>
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
                    <div className={styles.eventcardcarddetails}>
                        Venue : {venue}
                    </div>
                    <div className={styles.aavartanbutton}>
                        <Link to={url}>
                        <button>{btn}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard