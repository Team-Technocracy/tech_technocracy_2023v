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

function Circuitrix() {
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
		"event": "Circuitrix",
		"name": "",
		"mail": "",
		"phone": "",
		"whatsapp": "",
		"college":"",
		"yos":"",
		"branch":""
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
			axios.post(`https://aavartan-backend-production.up.railway.app/circuitrix/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>CIRCUITRIX</h3>
							<p className={styles.event_description}>A circuit-related game that will pique your interest. Get ready to step into the circuit realm.</p>
							<p>
							"Unleashing the Electronics Prodigy Within" <br /><br />

								CIRCUITRIX, an electrifying event that tests the very basics of electronics! This is a unique opportunity to showcase your skills in designing and implementing electronic circuits, and to put your knowledge to the test. <br /><br />

								"Brush up on your concepts and get ready to unleash your designing skills in the 'CIRCUITRIX' battlefield" <br /><br />

								The competition consists of two rounds, each designed to challenge your skills and knowledge in different ways. Let's take a look at each round in detail. <br /><br />

								<b>First Round: Aptitude Test</b> <br />

								"The first round tests the speed and precision of the participants in the basics of digital and analog knowledge." <br /><br />

								This is a rapid-fire round, so be prepared to think quickly and accurately. <br /><br />

								Teams of three participants will compete in a test of speed and precision in the first round.
								The participants who win this round will be teamed up with two other participants to form a team of three. These teams will then proceed to the second round <br /> <br />

								<b>Second Round: Treasure Hunt</b> <br />

								The second round is a treasure hunt-style competition where participants must find different components hidden all over the campus. To do this, they will need to solve circuit questions and use the components to assemble working circuits. <br /> <br />

								"Solve circuit questions, find hidden components, and make it work in the second round" <br /> <br />

								This round is designed to test both your technical knowledge and your ability to work effectively as a team. The winner of this round will be determined based on performance, so be sure to bring your best game. <br /> <br />

								"Join the fight and let your expertise in electronics speak for itself." <br /> <br />

								CIRCUITRIX is an exciting event that provides an opportunity to showcase your skills and knowledge of electronics. So, brush up on your concepts, bring your A-game, and join the battle for electronics supremacy. The final winner will be decided based on performance, so let your electronics skills do the talking.

							</p>
							<p className={styles.event_location}><b>LOCATION : </b>Ellex Gallery</p>
							<p className={styles.event_time}><b>TIME : </b><br/>Day 1: 1 PM - 2 PM <br/>Day 2: 12 PM - 2:30 PM </p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b><br/>Durgesh Verma: 9827731951 <br/>Chirag Gajbhiye: 9630817137</p>
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
									</Grid> */}
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
export default Circuitrix;