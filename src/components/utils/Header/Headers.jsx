import React from "react";
import styles from "./headers.module.css";


const SideNav = (props) => {
  return (
    <div className={styles.stickynav} >
      <div className={styles.sidenav}>{props.name}</div>
    </div>
  );
};

export default SideNav;