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

function Bow() {
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
		"event": "BOW",
		"name": "",
		"mail": "",
		"phone": "",
		"whatsapp": "",
		"college": "",
		"course": "",
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
		if (form.event !== ""&&form.name !== ""&&form.mail !== ""&&form.phone !== "" && form.whatsapp !== ""&&form.college !== ""&&form.yos !== ""&&form.branch !== ""&&form.course !== "" ) {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/bow/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>BEST OUT OF WASTE</h3>
							<p className={styles.event_description}>“Recycle it all, No matter how small! “ with this intent unveil your creativity, artistry, proficiency and dexterity, spawning marvelous adornments from discarded scrap. </p>
							<p className={styles.event_more}><b>DESCRIPTION: </b>Instead of dumping  waste items in landfills, a variety of inventive and creative ideas may be combined to create something new and meaningful. This event aims to promote such unique ideas and showcase them. Participants are allowed to participate in any art/craft form that appeals to them, use waste and discarded things for the art/craft, and make the best out of waste. This competition is open to all.</p>
							<p className={styles.event_materials}>
								<b>RULES : </b>
								<ul>
									<li>- First 30 entries will be considered. However the committee reserves the right of any increment in number if desired.</li>
									<li>- A team should consist of 2 or 3 members. Individual participation is also allowed.</li>
									<li>- The participants have to make the working model in the said duration only.</li>
									<li>- ONLY waste material should be used. However, stationary items like Fevicol, Scissors, Stapler, Tape etc. are allowed.</li>
									<li>- Some of the required waste material can be provided to the team. Though, the participants need to bring their own Waste Material. But use of partial, whole or readymade models and any other unfair means will directly lead to disqualification.</li>
									<li>- Each member of the team must contain the identity card of his/her respected institute.</li>
								</ul>
							</p>
							<p className={styles.event_materials}>
								<b>JUDGING CRITERIA : </b>
								<ul>
									<li>- Eco-Friendly: Minimum harm to the atmosphere.</li>
									<li>- Theme/ Design: Ability to develop & present in the form of an object.</li>
									<li>- Waste material used: Optimum use of waste material.</li>
									<li>- Presentation: Detail of the materials used and proper functional explanation of the design.</li>
									<li>- Utility: For a sustainable co-existing ecosystem.</li>
									<li>- Each member of the team must contain the identity card of his/her respected institute.</li>
								</ul>
							</p>
							<p className={styles.event_materials}>
								<b>EVENT JUSTIFICATION : </b>
								<ul>
									<li>- To highlight the importance of 3R’s i.e. REDUCE, RECYCLE & REUSE for a better future. </li>
									<li>- Innovative thinking</li>
								</ul>
							</p>
							{/* <p className={styles.event_team}><b>Requirements: </b>○ waste products, Number of members - 2, Volunteers – 4-5</p> */}
							<p className={styles.event_procedure}><b>PRIZES : </b>Vouchers</p>
							<p className={styles.event_location}><b>LOCATION : </b>Left Garden</p>
							<p className={styles.event_time}><b>TIME : </b>12 PM - 2 PM</p>
							<p className={styles.event_time}><b>DATE : </b>04.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b><br/>Nakshatra Singh: 9198005550 <br/> Shreya Borikar: 7879086001</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Closed</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" , whatsapp_number:"",year: "",branch:"",course:"" }}>
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
											id="course"
											name="course"
											label="Course"
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
export default Bow;