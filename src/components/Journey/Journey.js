import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Timeline.module.css";
import { ReactComponent as Milestone } from "./Icons/flag-solid.svg";
// import { animationDelay } from "../../constants";
import SideNav from '../utils/Header/Headers';

function Journey(){

    let workIconStyles = {background: "white"}
    let showing_element = {background: "#915bed",
                           color:"white"};
    let showing_element_arrow={color:"#3d4489"}

    return(
        <div id="journey">
           <SideNav name="Our Journey"/>
        <div className={styles.title} >
        </div>
        <VerticalTimeline 
            lineColor={'#08f7fe'}
        >               
                        <VerticalTimelineElement 
                            key="1"
                            date="2007"
                            dateClassName={styles.timeline_date}
                            icon=<Milestone/>
                            iconStyle={workIconStyles}
                            contentStyle={showing_element}
                            contentArrowStyle={showing_element_arrow}
                        >
                        <h2 className={`${styles.timeline_info} ${styles.timeline_title}`} >The beginning</h2>
                        <p className={styles.timeline_info} id="description">
                            The grand fest of Aavartan had its seed sown back in 2007, when few
                            Technical enthusiasts came up with the idea of "Vigyaan"-the
                            national level science exhibition, single event back then which
                            eventually transformed into magnificent Aavartan as we see it today.
                        </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            key="2"
                            date="2011"
                            dateClassName={styles.timeline_date}
                            icon=<Milestone/>
                            iconStyle={workIconStyles}
                            contentStyle={showing_element}
                            contentArrowStyle={showing_element_arrow}
                        >
                        <h2 className={`${styles.timeline_info} ${styles.timeline_title}`}>Vigyaan</h2>
                        <p className={styles.timeline_info} id="description">
                            It was 2011, when people witnessed the massive transition of
                            Vigyaan, a platform for innovative ideas, into a complete fest,
                            Aavartan. The consistent efforts and out of the box ideas of the
                            team members laid the foundation for what now is called as the
                            trademark of tech-fests!
                        </p>
                        </VerticalTimelineElement>

                        
                        <VerticalTimelineElement
                            key="3"
                            date="2019"
                            dateClassName={styles.timeline_date}
                            icon=<Milestone/>
                            iconStyle={workIconStyles}
                            contentStyle={showing_element}
                            contentArrowStyle={showing_element_arrow}
                        >
                        <h2 className={`${styles.timeline_info} ${styles.timeline_title}`}>Central India's Largest Tech-fest</h2>
                        <p className={styles.timeline_info} id="description">
                            Team Technocracy took it to the next level as Aavartan'19 witnessed
                            a footfall of over 10,000. The family of 200+ members left no stones
                            unturned in creating a paradise for any tech-savvy. Their efforts
                            bore a golden fruit as Aavartan reached the milestone of being
                            recognized as the Central India's largest tech-fest.
                        </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            key="4"
                            date="2023"
                            dateClassName={styles.timeline_date}
                            icon=<Milestone/>
                            iconStyle={workIconStyles}
                            contentStyle={showing_element}
                            contentArrowStyle={showing_element_arrow}
                        >
                        <h2 className={`${styles.timeline_info} ${styles.timeline_title}`}>We are coming back</h2>
                        <p id="description" className={styles.timeline_info}>
                            Aavartan will be back with its new edition with stellar range of
                            exciting tech savvy events and evening shows. Stay tuned with us
                            through our social media handles to make sure you don't miss out on
                            the next big tech revolution!
                        </p>
                        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    )
}

export default Journey;