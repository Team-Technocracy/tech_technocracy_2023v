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
import img from '../../../../assets/images/leftArrow.png';
import valo from '../../../../assets/images/valo.png';
import useFullPageLoader from '../../../utils/useFullPageLoader';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Valorant() {
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
		"event": "Valorant",
		"mail": "",
		"team_name": "",
		"leader_username": "",
		"leader_whatsapp": "",
		"mem2_username": "",
		"mem3_username": "",
		"mem4_username": "",
		"mem5_username": "",
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		window.location.href="https://forms.gle/VM9egpYXPSvBLoqf9";
		showLoader();
		if (form.event !== ""&&form.mail !== ""&&form.team_name !== ""&&form.leader_username !== ""&&form.leader_whatsapp !== "" && form.mem2_username !== ""&&form.mem3_username !== ""&&form.mem4_username !== ""&&form.mem5_username !== "") {
			console.log(form);
			axios.post(`https://aavartan-backend-production.up.railway.app/valorant/${JSON.stringify(form)}`)
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
							<h3 className={styles.event_title}>Valorant Tournament</h3>
							<p className={styles.event_description}> Buckle Up! As easy as this event may seem ,the harder it is in actuality. Can you last everyone out in this 5v5 face-off ?
							</p>
							<p><b>Rules and Regulations for Valorant Tournament</b>
							<b>Eligibility</b>
							<ul>
								<li>- The person playing must be a student of NIT RAIPUR</li>
								<li>- The first 8-team to fill the form will be selected for the tournament.</li>
							</ul>
							<b>Maps</b>
							<ul>
								<li>- All valorant competitive maps are allowed.</li>
								<li>- Map will be eliminated with a toss just like in VCT.</li>
							</ul>
							</p>
							<div>
							<p>
								<b >Rounds</b>
								<img  style={{marginTop:"0.5rem"}} src={valo} width="100%" alt="Valorant Round Information" />
							</p></div>
							<ul>
								<li>- No replacement is allowed.</li>
								<li>- Any unfair means will result in disqualification</li>
								<li>- All the rules and regulation applied at VCT will be applied here as well</li>
								
								<div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
								<a href="https://liquipedia.net/commons/images/8/82/VCT_MY-SG_Challengers_rulebook.pdf" style={{color:"white", cursor:"pointer", textDecoration:"underline", fontStyle:"italic"}}><b>Check Rules Here</b></a>
								</div>
								
							</ul>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						{/* <Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
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
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
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
											id="team_leader_name"
											name="leader_username"
											label="Team Leader Name, Valo username & rank"
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
											label="Leader's WhatsApp No"
											variant="outlined"

											autoComplete='off'
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem2_username"
											id="name2"
											label="Team Member Name 2, Valo username & rank"
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
											name="mem3_username"
											id="name3"
											label="Team Member Name 3, Valo username & rank"
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
											name="mem4_username"
											id="name4"
											label="Team Member Name 4, Valo username & rank"
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
											name="mem5_username"
											id="name5"
											label="Team Member Name 5, Valo username & rank"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
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
export default Valorant;