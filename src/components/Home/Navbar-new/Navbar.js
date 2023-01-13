import tc2 from "../../../images/tcLogo.png";
import "./navbar-style.css"
import { useState } from "react";
function Navbar() {
    const [toggler,setToggler]=useState(false);
    console.log(toggler);
    return (
        <div>
            <nav>
                <a href="#"><img src={tc2} className="tclogo"></img></a>
                <div>
                    <ul id="navbar" className={toggler?"#navbar active":"navbar"}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#aavartan">AAVARTAN</a></li>
                        <li><a href="#">SPONSORS</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">CONTACT</a></li>
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