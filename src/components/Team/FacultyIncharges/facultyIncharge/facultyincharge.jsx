import React, { useEffect } from "react";
import styles from "./facultyincharge.module.css";
import Aos from "aos";
// import "aos/dist/aos.css";


const FacultyCard = (props) => {
  useEffect(() => {
    Aos.init({ delay: 150 });
  }, []);
  return (
    <div className={styles.facultycontainer} data-aos="fade-up">
      <div className={styles.facultycard}
        style={{ backgroundImage: "url(" + props.image + ")" }}>
          <div className={styles.faculty}>
            <div className={styles.facultynote}>
              <div className={styles.facultyquote}>
                <blockquote className={styles.quote}>
                  <q>{props.quote}</q>
                </blockquote>
                <cite className={styles.designation}>&#8212; {props.designation}</cite>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FacultyCard;
