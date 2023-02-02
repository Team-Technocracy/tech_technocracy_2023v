import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import Navbar from '../../../Home/Navbar-new/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
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

function OpenMic() {

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
		"event": "Open Mic",
		"name": "",
		"mail": "",
		"performance": "",
		"whatsapp": "",
		"college": "",
		"branch": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		alert("Please wait...Don't refresh the page");
		axios.post(`https://aavartan-backend-production.up.railway.app/openmic/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>Open Mic</h3>
							<p className={styles.event_description}>  “Just give me a mic, and I’ll rock it”, is often what we think in our confident minds.
								Now get a chance to showcase your talent and skills, through the power of a mic, and your words!
							</p>
							<p><b>Description :</b>Fun event which will be on the first day along with the other events. Anyone interested can come and entertain the audience with their singing/poetry/mimicry act/any sort of act, If interested people can come in a group to perform as a band as well.</p>
							<p>
								<b>Rules :</b>
								<ul>
									<li>- No offensive/violent content should be presented.</li>
									<li>- Participants will be giving their names on the spot.</li>
									<li>- The participants will perform on a first come first serve manner.</li>
								</ul>
							</p>
							<p>
								<b>Event Justification :</b>
								<ul>
									<li>- Oration</li>
									<li>- Communication Skills</li>
									<li>- Confidence Building</li>
								</ul>
							</p>
							<p className={styles.event_location}><b>LOCATION : </b>AMUL PARLOUR</p>
							<p className={styles.event_time}><b>TIME : </b>9:00AM -6:00PM</p>
							<p className={styles.event_time}><b>DATE : </b>05.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Aral Bhagat</p>

							{/* <p><b>Requirements:</b>A set of karaoke speakers with mic will be required.</p> */}
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						<Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "", whatsapp_number: "", year: "", branch: "" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>

									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="email"
											label="Email Address"
											name="mail"
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
											id="name"
											name="name"
											label="Name"
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
											id="branch"
											name="branch"
											label="Branch"
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
											id="phone_no"
											name="phone"
											label="	Phone No"
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
											id="whatsapp_no"
											name="whatsapp"
											label="WhatsApp No"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									<Grid item xs={12} >
									<TextField
										id="perform"
										name="performance"
										label="What do you want to perform ?"
										multiline
										rows={4}
										defaultValue=""
										margin="normal"
										required
										fullWidth
										onKeyUp={(e) => handle(e)}
									/>
									</Grid>

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
export default OpenMic;