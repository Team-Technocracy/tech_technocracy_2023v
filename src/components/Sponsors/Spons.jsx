import SponsCardSec from "./SponsCardSec";
import React from "react";
import TitleSponsor from "./TitleSponsor/TitleSponsor";
import SideNav from "./SideNav/sidenav";

function Sponsors(){
    return(
        <>
            <SideNav name="Our Past Sponsors" />
            <TitleSponsor/>
            <SponsCardSec/>
        </>
    );

}

export default Sponsors;