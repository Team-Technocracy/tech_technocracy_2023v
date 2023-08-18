import React from 'react'
import styles from './AavartanHero.module.css'
import videoBg from "./assets/yo.webm";
import img from './assets/theme.jpeg'

const AavartanHero = () => {
  return (
    <>
    <div className={styles.ahcontainer}>
     <div className={styles.videoWrapper}>
     <div className={styles.particleWrapperLeft}>
        <video className={styles.ahvideo} src={videoBg} autoPlay loop muted />
     </div>
     <div className={styles.textcontent}>
     <h2>AAVARTAN</h2>
        <p>All the theories and formulae boils down to most crucial thing in engineering-Application. This ideology forms the basis of an ocassion which lets the engineer in every student fly and air the spark within. And we have named it as "AAVARTAN".
           It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India, in all standards. Aavartan is the celebration of engineering, science and technology organized wholly and solely by the students of NIT Raipur.</p>
       <a href="#vigyaan"><button className={styles.button49}>Vigyaan</button></a>
    </div>
    </div>
    </div>
    <div className={styles.themesection}>
    <div className={styles.aavartantheme}>
      <img src={img} alt="" />
    </div>
    <div className={styles.aavartantheme}>
    <a href="/events"><button className={styles.button49}>Events</button></a>
    </div>
    </div>

    </>


  )
}

export default AavartanHero