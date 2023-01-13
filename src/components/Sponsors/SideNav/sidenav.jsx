import React from "react";
import styles from "./sidenav.module.css";


const SideNav = (props) => {
  return (
    <div className={styles.stickynav} >
      <nav className={styles.sidenav}>{props.name}</nav>
    </div>
  );
};

export default SideNav;