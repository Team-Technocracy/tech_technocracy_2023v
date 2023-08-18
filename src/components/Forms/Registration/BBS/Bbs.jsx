import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Navbar from '../../../Home/Navbar-new/Navbar'
import styles from "../Styles/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import events from '../../../../assets/datas/EventsDatas'
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

function Bbs() {
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
		"event": "Beg Borrow Steal",
		"team_name": "",
		"leader_name": "",
		"leader_mail": "",
		"mobile": "",
		"whatsapp":"",
		"college":"",
		"yos":"",
		"branch":"",
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		showLoader();
		if (form.event !== ""&&form.team_name !== "" && form.leader_name !== ""&&form.leader_mail !== ""&&form.mobile !== "" && form.whatsapp !== ""&&form.college !== ""&&form.yos !== ""&&form.branch !== "" ) {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/bbs/${JSON.stringify(form)}`)
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
							<p className={styles.event_time}><b>CONTACT : </b><br/>Mansi Kumari: 7999298531<br/> Priyanshu Agrahari: 9452316350</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Closed</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" , whatsapp_number:"",year: "",branch:"" }}>
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
											name="leader_name"
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
											name="leader_mail"
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
											name="mobile"
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
											name="whatsapp"
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
											name="college"
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
											name="yos"
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
export default Bbs;