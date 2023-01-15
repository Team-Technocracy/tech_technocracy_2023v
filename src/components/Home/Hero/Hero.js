import videoBg from "../../../images/spaceship.webm";
// CSS Imports
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div id='hero' className={styles.heroWrapper}>
			<div className={styles.videoWrapper}>
				<div className={styles.particleWrapperLeft}>
					<div className='videodiv'>
						<video src={videoBg} autoPlay loop muted />
					</div>
					<div className={styles.textcontent}>
						<a href="/aavartan"><button className={styles.button49}>Vigyaan</button></a>
						<p>The student Technical Committee of NIT Raipur </p>
						<h2>Team <br />Technocracy</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
