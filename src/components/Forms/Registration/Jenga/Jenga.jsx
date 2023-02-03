import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import Navbar from '../../../Home/Navbar-new/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps } from "@mui/material";
import { useParams } from "react-router-dom";
import events from '../../../../assets/datas/EventsDatas'
import axios from "axios";
// import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";
import img from '../../../../assets/images/leftArrow.png'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Jenga() {

	const { id } = useParams();
	// data of event
	const data = {
		name: "",
		desc: "",
		teamSize: 0,
		teamMin: 0
	}

	events.map((event) => {
		if (String(event.id) === id) {
			data.name = event.title;
			data.desc = event.details;
			data.teamSize = event.teamSize;
			data.teamMin = event.teamMin;
		}
	});

	const count = [];
	for (let i = 1; i < data.teamSize; i++) {
		count.push(String(i));
	}
	console.log(count);

	const [form, set] = useState({
		"event": "Animatrix",
		"name": "",
		"mail": "",
		"phone": "",
		"whatsapp": "",
		"college": "",
		"yos": "",
		"branch": "",
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		alert("Please wait...Don't refresh the page");
		axios.post(`https://aavartan-backend-production.up.railway.app/animatrix/${JSON.stringify(form)}`)
			.then(res => {
				if (res.data === 0) {
					alert("Error occurred");
				}
				else if (res.data === 1) {
					alert("Team registered successfully");
				}
			})
	}

	const [attri, setAttri] = useState(false);
	const [toggle, setToggle] = useState(false);

	function changeState() {
		setToggle(!toggle);
		setAttri(!attri);
	}

	return (
		<>
		<Navbar />
		<ThemeProvider className={styles} theme={darkTheme}>
			
			<div className={styles.container}>

				<Container>
				<div className={styles.goback}>
						<NavLink to="/events"><img src={img} alt="" /></NavLink>
					</div>
					<div className={styles.description}>
						<div>
							<h3 className={styles.event_title}>JENGA</h3>
							<p className={styles.event_description}>Do you have what it takes to stand at the top() of the tower ? If yes then grace us with your presence at the Jenga event and push() all your rivals down to win it all.</p>
							<p className={styles.event_more}><b>OBJECTIVE : </b>Remove one block at a time from the tower, and then stack it on top. The last player to stack a block without making the tower fall wins the game! </p>
							<p className={styles.event_materials}>
								<b>GAMEPLAY :</b>
								<ul>
									<li> • The player who built the tower goes first. Play passes to the left.On Your Turn. </li>
									<li> • Carefully remove a block from anywhere BELOW the highest completed story. Use only one hand! Then stack the block on top of the tower at right angles to the blocks just below it.</li>
									<li> • Remove and stack one block per turn. Remember use only one hand (you can switch hands whenever you wish)!</li>
									<li> • As play proceeds and the weight of the tower shifts, some blocks become looser than others and are easier to remove. You can touch other blocks to find a loose one- but if you move a block out of place. you must fix it (using one hand only) before touching another block.</li>
									<li> • While stacking, always complete a 3-block story before starting a higher one.</li>
									<li> • Your turn ends 10 seconds after you stack your block - or as soon as the player to your left touches one.</li>
									<li> • Keep removing and stacking blocks until someone topples the tower. A real pro can build a tower 36 stories high or more!</li>
								</ul>
								<br />
								<b>WINNING</b>
								<br />
								<p>If you're the last player to stack a block without toppling the tower, you win! The player who makes the tower fall gets to set up the tower for the next game.</p>
							</p>
							{/* <p className={styles.event_materials}>
								<b>EVENT JUSTIFICATION : </b>
								<ul>
									<li>- Tech skills</li>
									<li>- Creative Thinking</li>
									<li>- Presence of mind</li>
								</ul>
							</p> */}
							{/* <p className={styles.event_procedure}><b>PRIZES : </b>Vouchers and Goodies</p> */}
							<p className={styles.event_location}><b>LOCATION : </b>Left Garden</p>
							<p className={styles.event_time}><b>TIME : </b>9:30 AM- 11:30 AM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Vaibhav : 9983882497</p>
						</div>
					</div>
				</Container>

			</div>
		</ThemeProvider>
		</>
	);
}
export default Jenga;