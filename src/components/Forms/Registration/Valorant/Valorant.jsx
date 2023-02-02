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

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Valorant() {

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
		"mem4": "",
		"mem5": ""
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
					<div className={styles.description}>
						{/* <div className={styles.event_image}></div> */}
						<div>
							<h3 className={styles.event_title}>Valorant Tournament</h3>
							<p className={styles.event_description}> Buckle Up! As easy as this event may seem ,the harder it is in actuality. Can you last everyone out in this 5v5 face-off ?
							</p>
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
											id="email"
											label="Email Address"
											name="email"
											autoComplete="email"
											variant="outlined"
											
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
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
											label="Team Leader Name, Valo username & rank"
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
											name="mem2"
											id="name2"
											label="Team Member Name 2, Valo username & rank"
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
											label="Team Member Name 3, Valo username & rank"
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
											label="Team Member Name 4, Valo username & rank"
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
											name="mem5"
											id="name5"
											label="Team Member Name 5, Valo username & rank"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
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
export default Valorant;