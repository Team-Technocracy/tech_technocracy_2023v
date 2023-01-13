import React from 'react'
import './Nfooter.css'
import logo from '../../images/tcLogo.png'
import { Quotes } from '../utils/Quotes';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const NFooter = () => {
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  return (
    <>
    <footer id='footer' className="footer">
  	 <div className="f-container">
  	 	<div className="f-row">
  	 		<div className="footer-col logo-sec">
  	 			<img src={logo} height="80px" alt="" />
				<div className='f-quotes-sec'>
					<p className='f-quotes'>{curQuote.quote}</p>
					<p className='f-saidby'>- {curQuote.author}</p>
				</div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>TECHNOCRACY</h4>
  	 			<ul>
  	 				<li><a href="#">About Us</a></li>
  	 				<li><a href="#">Aavartan</a></li>
  	 				<li><a href="#">Vigyaan</a></li>
  	 				<li><a href="#">Sponsors</a></li>
  	 				<li><a href="#">Team</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>CONTACT</h4>
  	 			<ul>
  	 				<li><a className='underlinee'  href="mailto:nitrr.technocracy@gmail.com"><MailOutlineIcon className='linkss'/> nitrr.technocracy@gmail.com</a></li>
  	 				<li><a className='underlinee' href="#"><LocationOnIcon className='linkss'/> NIT Raipur, Raipur, CG 492013</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>LETS CONNECT</h4>
  	 			<div className="fsocial-links">
  	 				<a href="#"><FacebookIcon className='linkss2'/></a>
  	 				<a href="#"><TwitterIcon className='linkss2'/></a>
  	 				<a href="#"><InstagramIcon className='linkss2'/></a>
  	 				<a href="#"><LinkedInIcon className='linkss2'/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default NFooter