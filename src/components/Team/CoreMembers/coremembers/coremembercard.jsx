import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./coremembercard.module.css";

const CoreMemberCard = (props) => {
    useEffect(() => {
        Aos.init({ delay: 150 });
    }, []);
    return (
        <div className={styles.corecard} data-aos="fade-up">
            <div className={styles.core}>
                <span className={styles.corename}>{props.name}</span>
                <span className={styles.coredomain}>{props.domain}</span>
            </div>
        </div>
    )
};

export default CoreMemberCard;