import React from "react";
import SideNav from "../../Sponsors/SideNav/sidenav";
import TechTeamCard from "./techteam/techteamcard.jsx";
import styles from "./techteamsec.module.css";
import {techteamList} from "./techteamList";
import FavoriteSharpIcon from '@material-ui/icons/FavoriteRounded';
const TechTeamSec = () => {
    return <div className={styles.techteamsec}>
        <SideNav name="Our Tech Team" />
        <div className={styles.container}>
        {techteamList.map((item) => {
						return (
							<TechTeamCard
								key={item.id}
								name={item.name}
								image={item.imgUrl}
								insta={item.instaUrl}
								linkedin={item.linkedinUrl}
								desi={item.desi}
							/>
						);
					return null;
				})}
			
        </div>
		<div className={styles.text}>Made with <FavoriteSharpIcon style={{ color: "red",fontSize: "24px",paddingTop:"2px" }}/> by Tech Team</div>
    </div>
};

export default TechTeamSec;