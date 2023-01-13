import React from 'react'
import styles from './Nfooter.module.css'
import logo from '../../images/tcLogo.png'
import { Quotes } from '../utils/Quotes';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import classNames from 'classnames';

const NFooter = () => {
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  return (
    <>
    <footer className={styles.footer}>
  	 <div className={styles.fcontainer}>
  	 	<div className={styles.frow}>
  	 		<div className={classNames(styles.footercol, styles.logosec)}>
  	 			<img src={logo} height="80px" alt="" />
				<div className={styles.fquotessec}>
					<p className={styles.fquotes}>{curQuote.quote}</p>
					<p className={styles.fsaidby}>- {curQuote.author}</p>
				</div>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>TECHNOCRACY</h4>
  	 			<ul>
  	 				<li><a href="#">About Us</a></li>
  	 				<li><a href="#">Aavartan</a></li>
  	 				<li><a href="#">Vigyaan</a></li>
  	 				<li><a href="#">Sponsors</a></li>
  	 				<li><a href="#">Team</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>CONTACT</h4>
  	 			<ul>
  	 				<li><a href="mailto:nitrr.technocracy@gmail.com"><MailOutlineIcon className='linkss'/> nitrr.technocracy@gmail.com</a></li>
  	 				<li><a href="#"><LocationOnIcon className={styles.linkss}/> NIT Raipur, Raipur, CG 492013</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>LETS CONNECT</h4>
  	 			<div className="fsocial-links">
  	 				<a href="#"><FacebookIcon className={styles.linkss2}/></a>
  	 				<a href="#"><TwitterIcon className={styles.linkss2}/></a>
  	 				<a href="#"><InstagramIcon className={styles.linkss2}/></a>
  	 				<a href="#"><LinkedInIcon className={styles.linkss2}/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default NFooter