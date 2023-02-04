import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import Navbar from '../../../Home/Navbar-new/Navbar'
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

function Robotrek() {
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
		"event": "Robotrek",
		"mail": "",
		"leader_name": "",
		"leader_number":"",
		"leader_mail": "",
		"name2":"",
		"name3":"",
		"name4":"",
		// "college_name": "",
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		showLoader();
		if (form.event !== ""&&form.leader_name !== ""&&form.mail !== "" &&form.leader_mail !== "" && form.leader_number !== ""&&form.name2 !== ""&&form.name3 !== ""&&form.name4 !== "") {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/robotrek/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>ROBOTREK</h3>
							<p className={styles.event_description}>“Slow and steady wins the race”, but is it true for the robots as well? Find out in this extraordinary racing event where the self made robot cars will compete to accomplish the race.</p>
							<p className={styles.event_more}>Race is all about the need to be tested, the zeal to take risks, and the fortuity to be number one. 💯 But have you witnessed a race so different? Aavartan’22-23 along with Robotix club Nitrr brings you Robotrek, the one-of-a-kind robot racing event, where your own robots will compete in an exciting rivalry. A competition so sporty that can flip in the blink of an eye. So, charge up your zest and get ready with your fighters for a breathtaking competition!!</p>
							<p className={styles.event_materials}>
								<b>Event Details :</b>
								<p>The event will be conducted in two phases :</p>
								<p><b>1st Phase: </b>A half an hour quiz round for team leaders on 4th Feb at G4 from 11:00AM to 11:30PM.</p>
								<p><b>2nd Phase:</b>Shortlisted teams will be provided a list of components, a few hours before the round which is scheduled from 2pm to 5pm, and they have to make a vehicle from that in the given time at the basketball court, after which the final race will be conducted. The top three fastest vehicles will be the winners.</p>
							</p>
							{/* <p className={styles.event_team}><b>Requirements: </b>3 Whiteboards markers and dusters. 3-4 Executives for invigilation and setting up the code editor. 3-4 volunteers for managing the oncoming teams. The number of volunteers/executives required can vary with the number of registrations.</p> */}
							{/* <p className={styles.event_procedure}><b>PRIZES : </b>Vouchers</p> */}
							<p className={styles.event_location}><b>QUIZ : </b>12 PM - 12:30 PM at ELLEX GALLERY</p>
							<p className={styles.event_time}><b>VEHICLE MAKING : </b>2 PM - 5 PM at S42 ELLEX GALLERY</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Pramil Kesarwani: 8004559662</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Closed</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
							<form className={styles.form} >
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
								<Grid container spacing={2}>
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
											name="name2"
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
											name="name3"
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
											name="name4"
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
									{/* {count.map((i) => {
										return (
											<div>
												<div className={`${styles.common} ${styles.name_1}`}>
													<div>
														<Grid spacing={2} item xs={10}>
															<TextField
															margin="normal"
																name={"phone" + i}
																id="number_1"
																label="Contact no"
																type="text"
																required
																variant="outlined"
																autoComplete='none'
																onKeyUp={(e) => handle(e)}
															/>
														</Grid>
													</div>
													<div>
														<Grid item xs={10}>
															<TextField
															margin="normal"
																name={"branch" + i}
																required
																id="member_branch"
																label="Branch"
																type="text"
																
																variant="outlined"
																autoComplete='none'
																onKeyUp={(e) => handle(e)}
															/>
														</Grid>
													</div>
													<div>
														<Grid item xs={10}>
															<TextField
															margin="normal"
																name={"member_year" + i}
																required
																id="member_year"
																label="Year"
																type="text"
																
																variant="outlined"
																autoComplete='none'
																onKeyUp={(e) => handle(e)}
															/>
														</Grid>
													</div>
												</div>
											</div>
										)
									})} */}
								{/* </Grid>
								<br></br>
								   {alert0 ? <Alert variant="outlined" severity='error'>{alertContent0}</Alert> : <></> }
								   <br></br>
								   {alert1 ? <Alert variant="outlined" severity='success'>{alertContent1}</Alert> : <></> }
								   <br></br>
								<button type="button"  className={styles.registration_button} onClick={submit} >Register</button>
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
export default Robotrek;