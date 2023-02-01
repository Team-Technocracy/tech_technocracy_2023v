import tc2 from "../../../images/tcLogo.png";
import "./navbar-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import MenuIcond from '@material-ui/icons/Clear';
function Navbar() {
    const [toggler,setToggler]=useState(false);
    // console.log(toggler);
    return (
        <div>
            <nav>
                <a href="#"><img className="navlogo" src={tc2} alt='#jpg' ></img></a>
                <div>
                    <ul id="navbar" className={toggler?"#navbar active":"navbar"}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/aavartan">AAVARTAN</Link></li>
                        <li><Link to="/events">EVENTS</Link></li>
                        <li><a href="/#journey">JOURNEY</a></li>
                        <li><a href="/#spons">SPONSORS</a></li>
                        <li><a href="/#team">TEAM</a></li>
                        <li><a href="#footer">CONTACT</a></li>
                        <div className="responsive-close" onClick={()=>setToggler(!toggler)}><MenuIcond id='bars'/></div>
                    </ul>
                </div>
                <div className="responsive-open" onClick={()=>setToggler(!toggler)}>
                    <MenuIcon id='bars'  />
                </div>
            </nav>
        </div>);
}


export default Navbar;