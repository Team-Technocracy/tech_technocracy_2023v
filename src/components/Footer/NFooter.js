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
import FavoriteSharpIcon from '@material-ui/icons/FavoriteRounded';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const NFooter = () => {
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  return (
    <>
    <footer id='footer' className={styles.footer}>
  	 <div className={styles.fcontainer}>
  	 	<div className={styles.frow}>
  	 		<div className={classnames(styles.footercol, styles.logosec)}>
  	 			<img src={logo} height="80px" alt="" />
				<div className={styles.fquotessec}>
					<p className={styles.fquotes}>{curQuote.quote}</p>
					<p className={styles.fsaidby}>- {curQuote.author}</p>
				</div>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>TECHNOCRACY</h4>
  	 			<ul>
  	 				<li><a href="#aavartan">Aavartan</a></li>
  	 				<li><a href="#aavartan">Vigyaan</a></li>
  	 				<li><a href="#spons">Sponsors</a></li>
  	 				<li><a href="#team">Team</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>CONTACT</h4>
  	 			<ul>
  	 				<li><MailOutlineIcon style={{fontSize:"30px", color:"white"}}/>&nbsp;<a className={styles.linker} href="mailto:nitrr.technocracy@gmail.com"> nitrr.technocracy@gmail.com</a></li>
  	 				<li><LocationOnIcon style={{fontSize:"30px", color:"white"}}/>&nbsp;<a className={styles.linker} href="#"> NIT Raipur, Raipur, CG 492013</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footercol}>
  	 			<h4>LETS CONNECT</h4>
  	 			<div className={styles.fsociallinks}>
  	 				<a href="#"><FacebookIcon style={{ color: "#2FA4FF", fontSize:"35px"}}/></a>
  	 				<a href="#"><TwitterIcon style={{ color: "#2FA4FF", fontSize:"35px" }}/></a>
  	 				<a href="#"><InstagramIcon style={{ color: "#2FA4FF", fontSize:"35px" }}/></a>
  	 				<a href="#"><LinkedInIcon style={{ color: "#2FA4FF", fontSize:"35px" }}/></a>
  	 			</div>
				<div className={styles.techteamlink} to="/tech-team">Made with&nbsp; <FavoriteSharpIcon style = {{ color: "red",fontSize: "20px",paddingTop:"2px" }}/> &nbsp;by Tech Team</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default NFooter