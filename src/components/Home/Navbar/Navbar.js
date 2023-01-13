import { Fragment, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

// Component Import
import NavbarResponsive from './NavbarResponsive';
import { NavbarLinks } from '../../utils/NavbarLinks';

// Image Imports
import logo from '../../../images/tcLogo.png';

// CSS Import
import styles from './Navbar.module.css';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<Fragment>
			<div className={`${styles.navbarWrapper} ${isOpen && styles.active}`}>
				<nav className={`${styles.navbar} ${styles.center}`}>
					<a href='/#' className={styles.brand}>
						<img className={styles.logoImg} src={logo} alt='logo' />
					</a>
					<ul className={`${styles.center} ${styles.navLinks}`}>
						<NavbarLinks setOpen={setOpen} />
					</ul>
					<div className={styles.hamburgerWrapper}>
						<Hamburger duration='0.5' toggled={isOpen} toggle={setOpen} />
					</div>
				</nav>
				<NavbarResponsive isOpen={isOpen} setOpen={setOpen} />
			</div>
		</Fragment>
	);
};

export default Navbar;
