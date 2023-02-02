import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Navbar from '../../../Home/Navbar-new/Navbar'
import styles from "../Styles/styles.module.css";
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

function Bbs() {

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
		"event": data.name,
		"team_name": "",
		"team_leader_name": "",
		"team_leader_mail": "",
		"college_name": "",
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		alert("Please wait...Don't refresh the page");
		axios.post(`http://localhost:8000/register/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>BEG BORROW STEAL</h3>
							<p className={styles.event_description}>Beg! Borrow! Steal! Whatever it takes, succeed at all costs! Come on down to this epic activity and have a truly memorable experience.</p>
							<p className={styles.event_description}>In Beg Borrow Steal Participants will be given chits which will contain name of any objects, picture or name of any senior/any person. The participant will have to bring the objects either by begging it to someone or by borrowing it from someone or by stealing it, in case of a picture of any person, the participant will have to find the person and take a picture with him (all the team members should be present in the picture) without letting him know about the task and come with the picture to us and show us, the participant completing the task first will be the winner.</p>
							<p className={styles.event_materials}>
								<b>RULES : </b>
								<ul>
									<li>- A team should contain exact 3 members in the game.</li> <br /><br />
									<li>- Beg Borrow Steal contain 3 rounds. <br /> 
        In 1st round at a time 10 teams will be going for completing their task. <br />
         In 2nd round the 5 teams completing their task first will be eligible for this round. <br />
         In 3rd round team completing his task first will be the winner. In case of the tie in this round the teams will be given a new task.</li> <br /><br />
									<li>- The participants will be given time of 30 minutes to complete the given task in each round.</li> <br /><br />
									<li>- If the team brings any object of their own they will be disqualified. </li> <br /><br />
									<li>- If participant is found doing in-disciplinary act or foul play, the organizers have the right to disqualify the team immediately (in-disciplinary does not contain forcefully stealing/snatching here this is allowed but should not hurt anyone).</li> <br /><br />
									<li>- During the event the team members are not allowed to use their mobile phones so they will have to submit their phones to the organizers present there to avoid any type of cheating. A member from Technocracy should be provided to the participating team to avoid any foul play.</li> <br /><br />
								</ul>
							</p>
							<p className={styles.event_location}><b>LOCATION : </b>Central Garden</p>
							<p className={styles.event_time}><b>TIME : </b>3 PM- 6 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Mansi , Priyanshu</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						<Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" , whatsapp_number:"",year: "",branch:"" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
									<Grid item xs={12} >
										<TextField
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
											variant="outlined"
											autoFocus
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12} >
										<TextField
											required
											fullWidth
											id="team_leader_name"
											name="team_leader_name"
											label="Team Leader Name"
											variant="outlined"
											
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											type="email"
											id="team_leader_email"
											name="team_leader_email"
											label="Team Leader Email Id"
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_number"
											name="team_leader_number"
											label="Mobile Number (Team Leader)"
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="whatsapp_number"
											name="whatsapp_number"
											label="WhatsApp Number (Team Leader)"
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="college_name"
											name="college_name"
											label="College (Team Leader)"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="year"
											name="year"
											label="Year of Study (Team Leader)"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="branch"
											name="branch"
											label="Branch (Team Leader)"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<p className={styles.team_details}>Team Member Details</p>
									{count.map((i) => {
										return (
											<div>
												<div className={`${styles.common} ${styles.name_1}`}>
													<div>
														<Grid item xs={12}>
															<TextField
																name={"name" + i}
																required
																id="full_name_1"
																label="Full Name"
																
																variant="outlined"
																autoComplete='none'
																onKeyUp={(e) => handle(e)}
															/>
														</Grid>
													</div>
													<div>
														<Grid marginLeft={1} item xs={12}>
															<TextField
																name={"phone" + i}
																id="number_1"
																label="Mobile Number"
																type="text"
																required
																variant="outlined"
																autoComplete='none'
																onKeyUp={(e) => handle(e)}
															/>
														</Grid>
													</div>
												</div>
											</div>
										)
									})}
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
export default Bbs;