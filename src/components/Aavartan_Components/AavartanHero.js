import React from 'react'
import styles from './AavartanHero.module.css'
import videoBg from "./assets/yo.mp4";

const AavartanHero = () => {
  return (
    <>
    <div className={styles.ahcontainer}>
        <video className={styles.ahvideo} src={videoBg} autoPlay loop muted />
        <div className={styles.ahcentered}>AAVARTAN</div>
        <div className={styles.ahabout}>All the theories and formulae boils down to most crucial thing in engineering-Application. This ideology forms the basis of an ocassion which lets the engineer in every student fly and air the spark within. And we have named it as "AAVARTAN". It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India, in all standards. Aavartan is the celebration of engineering, science and technology organized wholly and solely by the students of NIT Raipur.</div>
        <div><a href=""><button className={styles.button49} role="button">VIGYAAN</button></a></div>
    </div>
    </>


  )
}

export default AavartanHero