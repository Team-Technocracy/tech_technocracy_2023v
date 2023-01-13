import React, { useEffect } from "react";
import styles from "./techteamcards.module.css";
import Aos from "aos";
import "./techteamcard.css"
import "aos/dist/aos.css";

const TechTeamCards = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);
  
  return (
    <div class="container">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-image ">
            <img width= "100%" height="100%" src={props.image} alt="profile"></img>
          </div>
          <ul class="social-icons">
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
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            {/* <li>
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
            </li> */}
          </ul>

          <div class="details ">
            <h2>{props.name}
              <br></br>
              <span class="job-title">{props.desi}</span>
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TechTeamCards;