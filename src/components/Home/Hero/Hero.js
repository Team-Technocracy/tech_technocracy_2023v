import { useEffect, useRef } from 'react';
import videoBg from "../../../images/spaceship.webm";
// import RINGS from 'vanta/dist/vanta.rings.min';
// CSS Imports
import styles from './Hero.css';

const Hero = () => {
	const ringsRef = useRef(null);

	useEffect(() => {
	});

	return (
		<div id='hero' className={styles.heroWrapper}>
			<div className={styles.videoWrapper}>
				<div className={styles.particleWrapperLeft}>
					
					<div className='videodiv'>
					

						<video src={videoBg} autoPlay loop muted />
					</div>
					<div className='textcontent'>
					
						<a href=""><button className="button-49" role="button">Vigyaan</button></a>
						<p>The Student Technical Committee of NIT Raipur </p>
						<h2>Team Technocracy</h2>
					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
