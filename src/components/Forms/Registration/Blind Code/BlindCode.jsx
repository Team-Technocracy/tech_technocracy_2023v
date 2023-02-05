import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Navbar from '../../../Home/Navbar-new/Navbar'
import styles from "../Styles/styles.module.css";
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

function BlindCode() {
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
		"event": "Blind Coding",
		"name": "",
		"mail": "",
		"phone": "",
		"whatsapp": "",
		"college": "",
		"yos": "",
		"branch": "",
		"hackerrank": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		showLoader();
		if (form.event !== ""&&form.name !== ""&&form.mail !== ""&&form.phone !== "" && form.whatsapp !== ""&&form.college !== ""&&form.yos !== ""&&form.branch !== ""&&form.hackerrank !== "" ) {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/blindCode/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>BLIND CODING</h3>
							<p className={styles.event_description}>Even without sight, there is still a vision. Hold on tight for this electrifying coding escapade to appraise your skills, logic, and limits.</p>
							{/* <p className={styles.event_more}>This Is A Team Competition In Which Your Team Competes By Designing a Bottle Rocket With The Material Provided Using Mechanical Engineering Concepts To Drive It To The Longest Distance Possible.</p> */}
							<p className={styles.event_materials}>
								<b>RULES : </b>
								<ul>
									<li>- Participants will be provided with 1 coding question. They will have to solve the question and type the solution without looking at the screen (monitors will be off).</li>
									<li>- There will be a time limit of half an hour.</li>
									<li>- Participants can use any programming language (eg: C++, JAVA, python etc).</li>
									<li>- The winner will be the first contestant that solves the problem with least error</li>
								</ul>
							</p>
							{/* <p className={styles.event_team}><b>TEAM : </b>3 Members</p> */}
							{/* <p className={styles.event_procedure}><b>PROCEDURE : </b>Your team will be given 3 chances to test your model and the longest distance will be registered as your score.</p> */}
							<p className={styles.event_location}><b>LOCATION : </b>CSE Lab 2</p>
							<p className={styles.event_time}><b>TIME : </b>2:30 PM - 5 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b><br/>Chirag Singhal: 8871720365 <br/> Harsh Ranjan Sinha: 8084355488</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Closed</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" , whatsapp_number:"",year: "",branch:"",course:"",hacker_rank:"" }}>
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
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="hacker_rank"
											name="hackerrank"
											label="Hacker Rank(username only), Don't use any special characters(@,#,...)"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
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
export default BlindCode;