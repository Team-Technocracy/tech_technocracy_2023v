import SponsCardSec from "./SponsCardSec";
import React from "react";
import TitleSponsor from "./TitleSponsor/TitleSponsor";
import SideNav from "../utils/Header/Headers";

function Sponsors(){
    return(
        <div id="spons">
            <SideNav name="Our Past Sponsors" />
            <TitleSponsor/>
            <SponsCardSec/>
        </div>
    );

}

export default Sponsors;