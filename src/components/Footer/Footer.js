import React from 'react';
import FooterQuote from './FooterQuote';
import footerLogo from '../../images/tcLogo.png';
import styles from './Footer.module.css';

const data = [
	{
		to: '/#aboutUs',
		text: 'About Us',
	},
	{
		to: '/#aavartan',
		text: 'Aavartan',
	},
	{
		to: '/#vigyaan',
		text: 'Vigyaan',
	},
	{
		to: '/#sponsors',
		text: 'Sponsors',
	},
	{
		to: '/#team',
		text: 'Team',
	},
];

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.logoContainer}>
				<a href='/#'>
					<img
						src={footerLogo}
						className={styles.footerLogo}
						alt='for footer'
					/>
				</a>
				<FooterQuote />
			</div>
			<div className={styles.linksContainer}>
				<ul>
					<li>
						<h3 className={styles.listHead}>
							<a href='/#'>Technocracy</a>
						</h3>
					</li>
					{data.map((ele) => (
						<li>
							<a href={ele.to}>{ele.text}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.contactContainer}>
				<ul>
					<li>
						<h3 id='contact-us' className={styles.listHead}>
							Contact
						</h3>
					</li>
					<li>
						<a href='mailto:nitraipurtechnocracy@gmail.com'>
							<i className='fas fa-envelope'></i>&nbsp;
							nitrr.technocracy@gmail.com
						</a>
					</li>
					<li>
						<a
							href='https://www.google.com/maps/place/National+Institute+of+Technology,+Raipur/@21.2497222,81.6028404,17z/data=!3m1!4b1!4m5!3m4!1s0x3a28dde213f66723:0x21543965c50c43c7!8m2!3d21.2497222!4d81.6050291'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fas fa-map-marker-alt'></i>&nbsp; NIT Raipur,
							Raipur, CG 492013
						</a>
					</li>
					<br />
					<br />
					<li>
						<span className={styles.socialLinks}>
							<a
								href='https://www.facebook.com/tc.nitrr'
								target='_blank'
								rel='noreferrer'
							>
								<i
									className={` ${styles.socialIcon} fab fa-facebook-square`}
								></i>
							</a>
							<a
								href='https://www.instagram.com/nitrr.aavartan/'
								target='_blank'
								rel='noreferrer'
							>
								<i className={` ${styles.socialIcon} fab fa-instagram`}></i>
							</a>
							<a
								href='https://twitter.com/tc_nitrr?lang=en'
								target='_blank'
								rel='noreferrer'
							>
								<i className={` ${styles.socialIcon} fab fa-twitter`}></i>
							</a>
							<a
								href='https://www.linkedin.com/company/aavartan/'
								target='_blank'
								rel='noreferrer'
							>
								<i className={` ${styles.socialIcon} fab fa-linkedin-in`}></i>
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
