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

function Clickovartan() {

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
				<div className={styles.goback}>
					
					</div>
						<div className={styles.description}>
							{/* <div className={styles.event_image}></div> */}
							<div>
								<h3 className={styles.event_title}>Click 'O' Vartan</h3>
								<p className={styles.event_description}>"A photograph is worth a thousand words." Capture the moment and it shall become undead. Hold your cameras tight! and get ready to capture the entire event in your lens. May the best Capture win!</p>
								<p className={styles.event_more}><b>DESCRIPTION: </b>This Aavartan we are organising an interesting photography competition for them who are crazy for selfies and experts in clicking the moments. During Aavartan there will be a number of events and attractions, we are organising so you just click your photo of precious and joyful moments and fill the form given below. Pictures may be of any event or attraction. And we will select the top three amazing pictures and give goodies to them.  </p>
								<p className={styles.event_materials}>
									<b>Judging criteria:</b>
									<ul>
										<br></br>
										<li>- Participants have to submit their photos as well as share their entry on their stories tagging @nitrr.aavatan and @clickclubnitrr with the hashtag #Aavartan’22-23 and #clickclubnitrr. </li>
										<br></br>
										<li>- Each participant should submit only one photo. Participants can also upload photos that they had clicked before the start date of the competition. </li>
										<br></br>
										<li>- Watermarked photos shall not be considered.  </li>
										<br></br>
										<li>- Entries within the given time period shall only be considered.  </li>
										<br></br>
										<li>- The authority of final decision regarding any case of conflicts shall lie with Click Club only.  </li>
										<br></br>
										<li>- Judgement shall be done on the basis of composition, colours and overall aesthetics of the image.   </li>
										<br></br>
										<li>- Basic photo editing is allowed. Photo manipulation is not allowed. </li>
										<br></br>
										<li>- Images captured from cameras as well as mobiles are accepted.  </li>
										<br></br>
										<li>- The authenticity of the image should be the sole responsibility of the photographer submitting, NIT Raipur holds no responsibility in case of any discrepancy. </li>
										<br></br>
										<li>- You will be asked for the original RAW/JPEG picture before the declaration of final results.  </li>
										<br></br>
										{/* <li>- Some of the required waste material can be provided to the team. Though, the participants need to bring their own Waste Material. But use of partial, whole or readymade models and any other unfair means will directly lead to disqualification.</li> */}
										{/* <li>- Each member of the team must contain the identity card of his/her respected institute.</li> */}
									</ul>
								</p>
								{/* <p className={styles.event_materials}>
								<b>EVENT JUSTIFICATION : </b>
								<ul>
									<li>- Tech skills</li>
									<li>- Creative Thinking</li>
									<li>- Presence of mind</li>
								</ul>
							</p> */}
								{/* <p className={styles.event_team}><b>Requirements: </b>○ waste products, Number of members - 2, Volunteers – 4-5</p> */}
								<p className={styles.event_procedure}><b>PRIZES : </b>Vouchers and Goodies</p>
								<p className={styles.event_location}><b>LOCATION : </b>Entire NIT's Campus</p>
								<p className={styles.event_time}><b>Duration : </b>Whole fest</p>
								{/* <p className={styles.event_time}><b>DATE : </b>04.02.2023</p> */}
								<p className={styles.event_time}><b>CONTACT : </b>Shalini</p>
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
											label=" Name"
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
											type="phone"
											id="phone_no"
											name="phone_no"
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
											name="whatsapp_no"
											label="WhatsApp No"
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
											required
											fullWidth
											id="college_name"
											name="college_name"
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
											name="year"
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
export default Clickovartan;