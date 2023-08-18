// this component will remove 
import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Registration/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps } from "@mui/material";
import { useParams } from "react-router-dom";
import events from '../../../assets/datas/EventsDatas'
import axios from "axios";
// import Cookies from 'js-cookie';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Registration() {

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
		<ThemeProvider className={styles} theme={darkTheme}>
			<div className={styles.container}>
				<Container>
					<div className={styles.description}>
						{/* <div className={styles.event_image}></div> */}
						<div>
							<h3 className={styles.event_title}>{data.name}</h3>
							<p className={styles.event_description}> {data.desc}
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
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
											variant="standard"
											autoFocus
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_name"
											name="team_leader_name"
											label="Team Leader Name"
											variant="standard"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_mail"
											name="team_leader_mail"
											label="Team Leader Email id"
											variant="standard"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="college_name"
											name="college_name"
											label="College"
											variant="standard"
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
																
																variant="standard"
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
																variant="standard"
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
								<button type="button"  className={styles.registration_button} onClick={submit} >Register</button>
							</form>
						</Formik>

					</div>
				</Container>

			</div>
		</ThemeProvider>
	);
}
export default Registration;