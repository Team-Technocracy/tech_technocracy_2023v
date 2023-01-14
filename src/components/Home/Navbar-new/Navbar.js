import tc2 from "../../../images/tcLogo.png";
import "./navbar-style.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
    const [toggler,setToggler]=useState(false);
    console.log(toggler);
    return (
        <div>
            <nav>
                <a href="#"><img className="navlogo" src={tc2}></img></a>
                <div>
                    <ul id="navbar" className={toggler?"#navbar active":"navbar"}>
                        <li><a href="#hero">HOME</a></li>
                        <li><Link to="/aavartan">AAVARTAN</Link></li>
                        <li><a href="#spons">SPONSORS</a></li>
                        <li><a href="#team">TEAM</a></li>
                        <li><a href="#footer">CONTACT</a></li>
                        <div className="responsive-close" onClick={()=>setToggler(!toggler)}><i className="fas fa-times"></i></div>
                    </ul>
                </div>
                <div className="responsive-open" onClick={()=>setToggler(!toggler)}>
                    <i id='bars' className="fas fa-bars"></i>
                </div>
            </nav>
        </div>);
}


export default Navbar;