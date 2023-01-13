import React from "react";
import KeyboardDoubleArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import styles from "./scrollup.module.css";

function ScrollUp() {
  return (
    <div className={styles.scroll}>
      <KeyboardDoubleArrowUpIcon/>
    </div>
  );
}

export default ScrollUp;
