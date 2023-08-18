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

function CodeTag() {
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
		"event": "Ecopolis",
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
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		showLoader();
		if (form.event !== ""&&form.team_name !== ""&&form.leader_name !== ""&&form.leader_mail !== ""&&form.leader_number !== "" && form.leader_whatsapp !== ""&&form.leader_college !== ""&&form.yos !== ""&&form.leader_branch !== ""&&form.mem3 !== ""&&form.mem2 !== "") {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/ecopolis/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>ECOPOLIS</h3>
							{/* <p className={styles.event_description}>Get yourself prepared to scrutinize, perceive, and decode the problem statement from images. Make no provision to compete with the finest intellects of coding.</p> */}
							{/* <p className={styles.event_more}><b>DESCRIPTION: </b>A team of 2 will participate in the event and compete with multiple other teams. A coding question will be explained to one of the teammates and they will try to explain the problem statement to their teammate through gestures and illustrations/drawings on a whiteboard/blackboard. The other teammate has to solve the question according to their interpretation of what their teammate is trying to explain. The code will be judged by the coder’s comprehension of the question and the number of test cases passed upon submission. The code will be submitted on reliable online platforms like InterviewBit, SPOJ, CodeStudio, etc.</p> */}
							<p className={styles.event_materials}>
                            “Form follows function.”
                            And the moment has come for you to take the form📐. The purpose of a building should be the
                            starting point for its design.
                            Each of us envisions a perfect city 🏰 that satisfies all of our needs and leisures. In light of this, we require plans to ensure that the myriad of items perfectly match the
                            blueprint.🏗️
                            Sharpen up your pencils, ✏️and hop into designing the Master plan of the city that you wanted.
                            Give shape to your ideas and Get ready to unleash the mega planner👷🏻‍♂️ within you.Seize the
                            chance to make the Beauty of life immortal✨.Ink your ideal city on paper and get your utopia to
                            victory!
                            #imagine #improve #implement
							</p>
							<p><b>Description :</b>It is a city planning event. The purpose of this
competition is choosing the best architectural and urban planning
concept (master plan) of a new city.</p>
							<p>
								<b>Rules : </b>
								<ul>
									<li>Team of 2-3 members will be allowed to participate.</li>
									<li>A time limit of 150 mins will be there for the whole
competition.</li>
									<li>Not more than 25 teams will be allowed for this event.</li>
									<li>Participants should bring their own requirements like T scales,. Etc. Only sheets will be provided there.</li>
								</ul>
								<b>Event Justification :</b>
								<ul>
									<li>Core Knowledge - Arch. , Civil</li>
									<li>Planning skills</li>
									<li>Optimize & critical thinking (Design Thinking)</li>
									<li>Far-distant thinking</li>
									<li>Teamwork</li>
									<li>Research</li>
								</ul>
							</p>
							<p className={styles.event_location}><b>LOCATION : </b>Studio 3,4 (Architecture Building)</p>
							<p className={styles.event_time}><b>TIME : </b>2 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Paila Likhitha - 9441745587</p>
							{/* <p className={styles.event_team}><b>Requirements: </b>3 Whiteboards markers and dusters. 3-4 Executives for invigilation and setting up the code editor. 3-4 volunteers for managing the oncoming teams. The number of volunteers/executives required can vary with the number of registrations.</p> */}
							{/* <p className={styles.event_procedure}><b>PRIZES : </b>Vouchers</p> */}
							{/* <p className={styles.event_location}><b>LOCATION : </b>CCC or Lab</p> */}
							{/* <p className={styles.event_time}><b>TIME : </b>9:30 AM- 11 AM</p> */}
							{/* <p className={styles.event_time}><b>DATE : </b>05.02.2023</p> */}
							<p className={styles.event_time}><b>CONTACT : </b>Amaan - 9754277594, Likhita - 9441745578</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
                                <Grid item xs={12}>
										<TextField
										autoFocus
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
											label="Team Leader WhatsApp No"
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
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team's Name"
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
export default CodeTag;