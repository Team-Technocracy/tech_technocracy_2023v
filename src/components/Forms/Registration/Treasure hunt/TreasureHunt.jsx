import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../../../Home/Navbar-new/Navbar'
import { Container, TextField, Grid, useThemeProps } from "@mui/material";
import { useParams } from "react-router-dom";
// import events from '../../../assets/datas/EventsDatas'
import axios from "axios";
// import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";
import img from '../../../../assets/images/leftArrow.png'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function TreasureHunt() {

	const { id } = useParams();
	// data of event
	const data = {
		name: "",
		desc: "",
		teamSize: 0,
		teamMin: 0
	}

	// events.map((event) => {
	// 	if (String(event.id) === id) {
	// 		data.name = event.title;
	// 		data.desc = event.details;
	// 		data.teamSize = event.teamSize;
	// 		data.teamMin = event.teamMin;
	// 	}
	// });

	const count = [];
	for (let i = 1; i < data.teamSize; i++) {
		count.push(String(i));
	}
	console.log(count);

	const [form, set] = useState({
		"event": "Treasure Hunt",
		"team_name": "",
		"leader_name": "",
		"leader_mail": "",
		"leader_whatsapp": "",
		"leader_college": "",
		"leader_number": "",
		"leader_branch": "",
		"yos": "",
		"mem2": "",
		"mem3": "",
		"mem4": ""
		// "mem5": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		alert("Please wait...Don't refresh the page");
		axios.post(`https://aavartan-backend-production.up.railway.app/treasurehunt/${JSON.stringify(form)}`)
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
						{/* <div className={styles.event_image}></div> */}
						<div>
							<h3 className={styles.event_title}>UNCHARTED- The Treasure Hunt</h3>
							<p className={styles.event_description}>Explore the extraordinary treasures nearby and enrich the thrill of a treasure hunt. Make the most of your time by participating in the entertainment.</p>
							<p className={styles.event_materials}><b>RULES : </b><br />1. Make sure you’ve registered through the form till 6pm 3rd FEB '23 . <br />2.No late requests will be entertained.<br /></p>
							<p className={styles.event_team}><b>NO. OF MEMBERS IN TEAM : </b>4 (min 1 girl, 1 boy)</p>
							<p className={styles.event_procedure}><b>PROCEDURE : </b>Your Teams will be provided with multiple clues one after the another and they have to compete with other teams to complete the task asap to get the next clue .</p>
							<p className={styles.event_procedure}><b>
PRELIMS TEST< br/>
TIME: 7pm  <br/>
DATE : 3rd feb </b></p>
							<p className={styles.event_location}><b>LOCATION OF MAIN EVENT: </b>Amul Parlour </p>
							<p className={styles.event_time}><b>TIME : </b>12 PM- 4 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Akshat - 8319609131 , Shreeyansh Sharma-9630498585 </p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						<Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
											variant="outlined"

											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_leader_name"
											name="leader_name"
											label="Team Leader Name"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="email"
											label="Leader's Email Address"
											name="leader_mail"
											autoComplete="email"
											variant="outlined"
											autoFocus
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="whatsapp_no"
											name="leader_whatsapp"
											label="Leader's WhatsApp No"
											variant="outlined"

											autoComplete='off'
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="college_name"
											name="leader_college"
											label="Leader's College Name"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>



									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_leader_number"
											name="leader_number"
											label="Team Leader Contact no"
											variant="outlined"
											autoComplete='off'
											type="number"

											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="branch"
											name="leader_branch"
											label="Branch"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="year"
											name="yos"
											label="Year"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem2"
											id="name2"
											label="Team Member Name 2"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem3"
											id="name3"
											label="Team Member Name 3"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem4"
											id="name4"
											label="Team Member Name 4"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									{/* <Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem5"
											id="name5"
											label="Team Member Name 5"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid> */}
								</Grid>
								<button type="button" className={styles.registration_button} onClick={submit} >Register</button>
							</form>
						</Formik>

					</div>
				</Container>

			</div>
		</ThemeProvider>
		</>
	);
}
export default TreasureHunt;