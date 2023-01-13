import React, { useEffect } from "react";

const JoinForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <h2 className={styles.h2}>Fill this Form to Join Us!</h2> */}
      <iframe
        title="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3nqU528IUPgdeYcIpkSdg5mj-FSGCcx1pO1axvMXBO-yjaw/viewform?embedded=true"
        width="640"
        height="3300"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </>
  );
};

export default JoinForm;
