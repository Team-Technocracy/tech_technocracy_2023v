import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import Navbar from '../../../Home/Navbar-new/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
// import events from '../../../assets/datas/EventsDatas'
import axios from "axios";
// import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";
import img from '../../../../assets/images/leftArrow.png'
import useFullPageLoader from '../../../utils/useFullPageLoader';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Gizmosky() {
	const [loader,showLoader,hideLoader]= useFullPageLoader();
	const [alert0, setErrorAlert] = useState(false);
	const [alert1, setAlert] = useState(false);
    const [alertContent0, setErrorAlertContent] = useState('');
	const [alertContent1, setSuccessAlertContent] = useState('');
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
		"event": "Hydrolift",
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
		showLoader();
		if (form.event !== ""&&form.name !== ""&&form.mail !== ""&&form.phone !== "" && form.whatsapp !== ""&&form.college !== ""&&form.yos !== ""&&form.branch !== "") {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/hydrolift/${JSON.stringify(form)}`)
				.then(res => {
					if (res.data === 0) {
						hideLoader();
						setErrorAlertContent('Error occurred');
						setErrorAlert(true);
						setAlert(false);
					}
					else if (res.data === 1) {
						hideLoader();
						setSuccessAlertContent('Registered successfully');
						setAlert(true);
						setErrorAlert(false);
					}
				})
		}else{
			hideLoader();
			setErrorAlertContent('Fill the required details!!!');
			setErrorAlert(true);
			setAlert(false);
		}
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
							<h3 className={styles.event_title}>HYDROLIFT</h3>
							<p className={styles.event_description}>Experience The Extraordinary At Our One-Of-A-Kind Event. This Is That One Time In Life That Pressure's Good For You. Apply That Pressure On The Correct Area And May The Force Be With You.</p>
							<p className={styles.event_more}>This Is A Team Competition In Which Your Team Competes By Designing a Bottle Rocket With The Material Provided Using Mechanical Engineering Concepts To Drive It To The Longest Distance Possible.</p>
							<p className={styles.event_materials}><b>MATERIALS PROVIDED : </b>2 ltr Bottle, Tyre Tube Valve, Feviquick, Air Pump, Water, Tape, Scissors, M-Seal</p>
							<p className={styles.event_team}><b>TEAM : </b>3-4 Members</p>
							<p className={styles.event_procedure}><b>PROCEDURE : </b>Your team will be given 3 chances to test your model and the longest distance will be registered as your score.</p>
							<p className={styles.event_location}><b>LOCATION : </b>Football Ground</p>
							<p className={styles.event_time}><b>TIME : </b>2 PM- 5 PM</p>
							<p className={styles.event_time}><b>DATE : </b>05.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b><br/>Viplow Kumar Das- 9109887623 <br/> Shreeyansh Sharma- 8770410758 <br/> Shazma Siddiqui- 9919304491</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" , whatsapp_number:"",year: "",branch:"" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
									<Grid item xs={12} >
										<TextField
											required
											fullWidth
											id="team_name"
											name="name"
											label="Name"
											variant="outlined"
											autoFocus
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											type="email"
											id="team_leader_name"
											name="mail"
											label="Email Id"
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_mail"
											name="phone"
											label="Mobile Number"
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
											name="whatsapp"
											label="WhatsApp Number"
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
											name="college"
											label="College"
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
											name="yos"
											label="Year of Study"
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
											label="Branch"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
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
								<br></br>
								   {alert0 ? <Alert variant="outlined" severity='error'>{alertContent0}</Alert> : <></> }
								   <br></br>
								   {alert1 ? <Alert variant="outlined" severity='success'>{alertContent1}</Alert> : <></> }
								   <br></br>
								<button type="button" className={styles.registration_button} onClick={submit} >Register</button>
							</form>
						</Formik> */}

					</div>
				</Container>

			</div>
		</ThemeProvider>
		{loader}
		</>
	);
}
export default Gizmosky;