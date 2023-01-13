
import React from "react";
import style from "../TitleSponsor/TitleSponsor.module.css";
function TitleSponsor(){
    return(
        <div className={style.titlecontainer}>
                <div className={style.titlecard}>
                <cite className={style.sub}>&mdash;Aavartan'19 Title Sponsor</cite>
                </div>
            </div>
    );
}

export default TitleSponsor;