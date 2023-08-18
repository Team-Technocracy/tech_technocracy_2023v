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

function Animatrix() {

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
		"event": "Animatrix",
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
		if (form.name !== ""&&form.branch !== "" && form.college !== ""&&form.event !== ""&&form.mail !== "" && form.phone !== ""&&form.whatsapp !== ""&&form.yos !== "" ) {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/animatrix/${JSON.stringify(form)}`)
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
								<h3 className={styles.event_title}>ANIMATRIX</h3>
								<p className={styles.event_description}>Bring your imagination to life. Animate your ideas and let them come alive in our competition. Unleash the power of animation and join us! Your creativity knows no bounds.</p>
								<p className={styles.event_more}><b>DESCRIPTION: </b>Animated video making competition. </p>
								<p className={styles.event_materials}>
									<b>RULES : </b>
									<ul>
										<li>- The participants will be provided a theme on which they will have to make a 30 second animation within the allotted time. </li>
										<li>- To avoid plagiarism, each contestant will be given a unique object that they will have to use inside their animation.</li>
										<li>- The participants will have to bring their own laptop/device for making the animation. </li>
										<li>- The animation will be judged on the basis of originality and detailing. </li>
										{/* <li>- Some of the required waste material can be provided to the team. Though, the participants need to bring their own Waste Material. But use of partial, whole or readymade models and any other unfair means will directly lead to disqualification.</li> */}
										{/* <li>- Each member of the team must contain the identity card of his/her respected institute.</li> */}
									</ul>
								</p>
								<p className={styles.event_materials}>
									<b>EVENT JUSTIFICATION : </b>
									<ul>
										<li>- Tech skills</li>
										<li>- Creative Thinking</li>
										<li>- Presence of mind</li>
									</ul>
								</p>
								{/* <p className={styles.event_team}><b>Requirements: </b>○ waste products, Number of members - 2, Volunteers – 4-5</p> */}
								<p className={styles.event_procedure}><b>PRIZES : </b>Vouchers and Goodies</p>
								<p className={styles.event_location}><b>LOCATION : </b>S4</p>
								<p className={styles.event_time}><b>TIME : </b>3 PM- 5 PM</p>
								<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
								<p className={styles.event_time}><b>CONTACT : </b>Suraj , Shivani</p>
							</div>
						</div>
					</Container>
					<Container>
						<div className={`${styles.registration} ${styles.registration_wrapper}`}>
							<h2 className={styles.heading}>Registration Closed</h2>
							{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
								<form className={styles.form} >
									<Grid container spacing={2}>
										<Grid item xs={12} >
											<TextField
												autoFocus
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
										<Grid item xs={12}>
											<TextField
												margin="normal"
												required
												fullWidth
												id="college_name"
												name="college"
												label="College Name"
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
												label="Year of Study"
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

									<button type="button" className={styles.registration_button} onClick={submit} >Register</button>
								</form>
								
							</Formik>  */}
						
						</div>
					</Container>
					
				</div>
			
			</ThemeProvider>
			{loader}
		</>
	);
}
export default Animatrix;