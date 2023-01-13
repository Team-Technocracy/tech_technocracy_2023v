import React, { useEffect } from "react";
import styles from "./techteamcards.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TechTeamCard = (props) => {
      useEffect(() => {
          Aos.init({ duration: 500 })
      }, []);
    return <div className={styles.card}>
        <div className={ styles.techcard}>
            <div className={styles.cover}>
                <div className={styles.bgol}>
                    <span className={styles.name}>{ props.name}</span>
                    </div>
                </div>
                <div className={styles.profile} ></div>
                {/* style={{ backgroundImage: "url(" + props.Image + ")" }} */}
                <div className={styles.pro}>
                    <div className={styles.probgol}>
                        <div className={styles.cred}>
                        <span className={styles.desi}>{ props.desi}</span>
                        <span className={styles.dev}>{ props.dev}</span>
                        </div>
                        <div className={styles.social}>
                            <span className={styles.icon}>
                                <a href={props.fb} className={styles.link+" "+styles.facebook}>
                                    <i className={"fab fa-facebook-f"}></i>
                                </a>
                            </span>
                            <span className={styles.icon}>
                                <a href={props.insta} className={styles.link+" "+styles.insta}>
                                    <i className={"fab fa-instagram"}></i>
                                </a>
                            </span>
                            <span className={styles.icon}>
                                <a href={props.linkedin} className={styles.link +" "+styles.linked}>
                                    <i className={"fab fa-linkedin-in"}></i>
                                </a>
                            </span>
                            <span className={styles.icon}>
                                <a href={props.github} className={styles.link +" "+styles.github}>
                                    <i className={"fab fa-github"}></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default TechTeamCard;