import React, { useEffect } from 'react'
import styles from './Event.module.css'
import events from '../../assets/datas/EventsDatas'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'
import EventCard from '../Cards/EventCard'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Event = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={styles.event} id="events" data-aos="zoom-in-down">
                <div className={styles.eventbody}>
                    <div className={styles.eventtitle}>
                        Events
                    </div>
                    <div className={styles.eventevents}>
                        <div className={styles.eventeventscontainer} ref={scrollRef}>
                            {events.map((event) => (
                                <EventCard img={event.img} title={event.title} date={event.date} time={event.time} details={event.details} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.eventslider}>
                        <div className={styles.eventsliderleft} onClick={() => scroll('left')}>
                            <img src={leftArrow} alt="leftArrow"></img>
                        </div>
                        <div className={styles.eventsliderright} onClick={() => scroll('right')}>
                            <img src={rightArrow} alt="rightArrow"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event