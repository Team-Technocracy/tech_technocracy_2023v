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

function VRShow() {

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
					{/* <div className={styles.description}>
						<div>
							<h3 className={styles.event_title}>VR Show</h3>
							<p className={styles.event_description}>Bring your imagination to life. Animate your ideas and let them come alive in our competition. Unleash the power of animation and join us! Your creativity knows no bounds.</p>
							<p className={styles.event_more}><b>DESCRIPTION: </b>Animated video making competition. </p>
							<p className={styles.event_materials}>
								<b>RULES : </b>
								<ul>
									<li>- The participants will be provided a theme on which they will have to make a 30 second animation within the allotted time. </li>
									<li>- To avoid plagiarism, each contestant will be given a unique object that they will have to use inside their animation.</li>
									<li>- The participants will have to bring their own laptop/device for making the animation. </li>
									<li>- The animation will be judged on the basis of originality and detailing. </li>
									</ul>
							</p>
							<p className={styles.event_materials}>
								<b>EVENT JUSTIFICATION : </b>
								<ul>
									<li>- Tech skills</li>
									<li>- Creative Thinking</li>
									<li>- Presence of mind</li>
								</ul>
							</p>
							<p className={styles.event_procedure}><b>PRIZES : </b>Vouchers and Goodies</p>
							<p className={styles.event_location}><b>LOCATION : </b>S4</p>
							<p className={styles.event_time}><b>TIME : </b>3 PM- 5 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Suraj , Shivani</p>
						</div>
					</div> */}
				</Container>

			</div>
		</ThemeProvider>
		</>
	);
}
export default VRShow;