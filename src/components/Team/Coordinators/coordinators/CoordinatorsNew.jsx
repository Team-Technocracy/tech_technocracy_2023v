import styles from './Coordinators_new.module.css';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const CoordinatorsNew = ({ name, url, linkedin, insta }) => {
	return (
		<>
			<div data-aos='fade-up' className={styles.cardsWrapper}>
				<div
					style={{ backgroundImage: `url(${url})` }}
					className={styles.cardFront}
				></div>
				<div className={styles.cardBack}>
					<h1>{name}</h1>
					<span className={styles.socialLinks}>
						<a href={linkedin}>
							<FaLinkedinIn />
						</a>
						{insta !== '#' && (
							<a href={insta}>
								<FaInstagram />{' '}
							</a>
						)}
					</span>
				</div>
			</div>
		</>
	);
};

export default CoordinatorsNew;
