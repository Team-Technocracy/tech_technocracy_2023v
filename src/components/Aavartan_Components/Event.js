import React, { useEffect } from 'react'
import styles from './Event.module.css'
import events from '../../assets/datas/EventsDatas'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'
import EventCard from '../Cards/EventCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventHero from './EventHero'


const Event = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={styles.eventcontainer}>
                <div className={styles.eventtitle}>
                    EVENTS
                </div>
                <EventHero/>
                <div className={styles.gridrow}>
                {events.map((event) => (
                                <EventCard id={event.id} img={event.img} title={event.title} date={event.date} time={event.time} venue={event.venue} details={event.details} regis={event.regis}/>
                            ))}
                </div>
            </div>
        </>
    )
}

export default Event