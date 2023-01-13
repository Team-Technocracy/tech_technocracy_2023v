import React,{useEffect} from 'react'
import './Event.css'
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
        <div className="event" id="events" data-aos="zoom-in-down">
            <div className="event-body">
                <div className="event-title">
                    Events
                </div>
                <div className="event-events">
                    <div className="event-events-container" ref={scrollRef}>
                    {events.map((event) => (
                        <EventCard img={event.img} title={event.title} date={event.date} time={event.time} details={event.details}/>
                    ))}    
                    </div>
                </div>
                <div className="event-slider">
                    <div className="event-slider-left" onClick={() => scroll('left')}>
                        <img src={leftArrow} alt="leftArrow"></img>
                    </div>
                    <div className="event-slider-right" onClick={() => scroll('right')}>
                        <img src={rightArrow} alt="rightArrow"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Event