import React, { useEffect } from "react";
import styles from './techteamcard.module.css';
import Aos from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const TechTeamCards = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
    window.scrollTo(0,0)
  }, []);
  
  return (
    <div class={styles.containers}>
      <div class={styles.cardwrapper}>
        <div class={styles.card}>
          <div >
            <img class={styles.cardimage} width= "100%" height="100%" src={props.image} alt="profile"></img>
          </div>
          <ul class={styles.socialicons}>
            {/* <li>
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
            </li> */}
            <li>
              <a href={props.linkedin}>
                <LinkedInIcon/>
              </a>
            </li>
            {/* <li>
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
            </li> */}
          </ul>

          <div class={styles.details}>
            <h2>{props.name}
              <br></br>
              <span class={styles.jobtitle}>{props.desi}</span>
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TechTeamCards;