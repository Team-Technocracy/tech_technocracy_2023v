import React from "react";
function Cards(props){


return(
            <div className={props.class}  data-aos="fade-up">
                <img src={props.image} alt="" />
            </div>
        );
   
}


export default Cards;