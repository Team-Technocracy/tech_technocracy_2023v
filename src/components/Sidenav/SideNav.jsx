import { useState } from "react";
import { useEffect, useRef } from "react";
import NavLink from "./NavLink";
import styles from "./navstyles.module.css";

const navList = [
  {
    to: "/#",
    text: "Home"
  },
  {
    to: "/aavartan",
    text: "Aavartan"
  },
  {
    to: "/events",
    text: "Events"
  },
  {
    to: "/#journey",
    text: "Journey"
  },
  {
    to: "/#spons",
    text: "Sponsors"
  },
  {
    to: "/#team",
    text: "Team"
  },
  {
    to: "/#footer",
    text: "Contact"
  }
];

const SideNav = () => {
  const [isVisible,setIsVisible] = useState(false)
  useEffect(()=>{
    const listenToScroll = () => {
      let margin = 120;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      if (winScroll > margin) {  
           setIsVisible(true);
      } else {
           setIsVisible(false);
      }  
    };
  
    window.addEventListener("scroll",listenToScroll)
    return ()=>window.removeEventListener("scroll",listenToScroll)
  },[])
  return (
    <nav className={styles.nav} style={{
      opacity:isVisible?1:0
    }}>
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <NavLink path={item.to} name={item.text} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
