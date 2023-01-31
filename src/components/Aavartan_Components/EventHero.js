import React from 'react'
import styles from './EventHero.module.css'
import videoBg from './assets/events.webm'
import img from './assets/theme.jpeg'

const EventHero = () => {
  return (
    <>
    	{/* <div className={styles.heroWrapper}>
			<div className={styles.videoWrapper}>
				<div className={styles.particleWrapperLeft}>
					<div className={styles.videodiv}>
						<video src={videoBg} autoPlay loop muted />
					</div>
					<div className={styles.textcontent}>
						<a href="/aavartan"><button className={styles.button49}>Vigyaan</button></a>
						<p>The student Technical Committee of NIT Raipur </p>
						<h2>Team <br />Technocracy</h2>
					</div>
				</div>
			</div>
		</div> */}
        <div className={styles.eventvideo}>
            <video src={videoBg} loop muted autoPlay width="90%" poster={img}></video>
        </div>
    </>
  )
}

export default EventHero