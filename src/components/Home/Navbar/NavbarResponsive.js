import { Fragment } from 'react';
// Component Import
import { NavbarLinks } from '../../utils/NavbarLinks';

// CSS Import
import styles from './Navbar.module.css';

const NavbarResponsive = ({isOpen, setOpen}) => {
  return (
    <Fragment>
      <div className={`${styles.navRsBg} ${isOpen && styles.open}`}></div>
      <ul className={`${styles.navRsLinks} ${styles.center} ${!isOpen && styles.collapse}`}>
        <NavbarLinks setOpen={setOpen}/>
      </ul>
    </Fragment>
  );
};

export default NavbarResponsive;
