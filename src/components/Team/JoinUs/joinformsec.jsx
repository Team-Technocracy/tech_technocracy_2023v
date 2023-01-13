import React, { useState } from "react";
import JoinForm from "./joinus/JoinForm";
import styles from "./joinformsec.module.css";

const Joinformsec = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className={styles.joinformsec}>
      {!isSubmitted && (
        <div>
          <JoinForm setIsSubmitted={setIsSubmitted} />
          {/* <Link to="/">
            <button className={styles.backButtonForm}>Go Back</button>
          </Link> */}
        </div>
      )}
      {isSubmitted && (
        <div className={styles.backButtonContainer}>
          <h2>
            Thank You for giving your time. Your response has been recorded.
          </h2>
          {/* <Link to="/">
            <button className={styles.backButton}>Go Back</button>
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Joinformsec;
