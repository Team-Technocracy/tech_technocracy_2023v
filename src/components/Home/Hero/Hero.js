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
						<h1>Technocracy</h1>
						<p>Nit Raipur's Student Technical Committee </p>
						<div className='button_div'>
							<a href='#contact-us' className='button'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
