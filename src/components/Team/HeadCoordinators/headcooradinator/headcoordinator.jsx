import React, { useEffect } from "react";
import styles from "./headcoordinator.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeadCoCard = (props) => {
  useEffect(() => {
    Aos.init({ delay: 150 });
  }, []);
  return <div className={styles.headcard} data-aos="fade-up">
    <div className={styles.headcocard} >
      <div className={styles.headcocard_front} style={{ backgroundImage: "url(" + props.ImgURL + ")" }}></div>
      <div className={styles.headcocard_back} style={{ backgroundImage: "url(" + props.ImgURL + ")" }}>
        <div className={styles.headco_text}>
          <h2 className={styles.headco_name}>{props.name}</h2>
          <p className={styles.headco_social}>
            <span className={styles.insta + " " + styles.icon}>
              <a className={styles.social_icon} href={props.insta} rel="noreferrer" target="_blank">
                <i className={"fab fa-instagram"}></i>
              </a>
            </span>
            <span className={styles.linkedin + " " + styles.icon}>
              <a className={styles.social_icon} href={props.linkedin} rel="noreferrer" target="_blank">
                <i className={"fab fa-linkedin-in"}></i>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
};

export default HeadCoCard;
