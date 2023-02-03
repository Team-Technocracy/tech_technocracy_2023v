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
import { Button } from "@material-ui/core";
// import Cookies from 'js-cookie';
import { Web3Storage } from "web3.storage";
import { NavLink } from "react-router-dom";
import img from '../../../../assets/images/leftArrow.png'
import useFullPageLoader from '../../../utils/useFullPageLoader';
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGREZjk0RDI4MjJiMkE2MjlEYWFmYkM5ZDg0OTdDMTdmNTBCMDYzMGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQwNTIzNTg1NTYsIm5hbWUiOiJ2aWd5YW4ifQ.JtNwmaiFc3CEBte5wO5-OF50nrXRbo3w8YIzXY6ZJWc"
const client = new Web3Storage({ token: apiToken });

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Clickovartan() {
	const [loader,showLoader,hideLoader]= useFullPageLoader();
	const [alert0, setErrorAlert] = useState(false);
	const [alert1, setAlert] = useState(false);
    const [alertContent0, setErrorAlertContent] = useState('');
	const [alertContent1, setSuccessAlertContent] = useState('');
	// const handleFile = (e) => {
	// 	let images = e.target.files;
	// 	var i;
	// 	for (i = 0; i < e.target.files.length; i => 3) {
	// 		this.state.targetFile.push(images[i].name);
	// 	}
	// 	this.setState({
	// 		selectedFile: this.state.targetFile

	// 	})
	// 	if (Array.from(e.target.files).length > 3) {
	// 		e.preventDefault();
	// 		alert(`Cannot upload files more than ${3}`);
	// 		return;
	// 	}
	// }
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
		"event": "ClickOVartan",
		"mail": "",
		"name": "",
		"phone": "",
		"whatsapp": "",
		"college": "",
		"yos": "",
		"branch": "",
		"hash1": "",
		"hash2": "",
		"hash3": "",
		"name1": "",
		"name2": "",
		"name3": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}


	async function submit() {
		showLoader();
		if (form.event !== ""&&form.name !== ""&&form.mail !== ""&&form.phone !== "" && form.whatsapp !== ""&&form.college !== ""&&form.yos !== ""&&form.branch !== "") {
			const file1 = document.getElementById("file1").files[0];
			var fileInput = document.getElementById("file1");

			var rootCid = await client.put(fileInput.files, {
				name: file1.name,
				maxRetries: 3
			});
			console.log(rootCid);
			form['hash1'] = rootCid;
			form["name1"] = file1.name;


			const file2 = document.getElementById("file2").files[0];
			var fileInput = document.getElementById("file2");

			var rootCid = await client.put(fileInput.files, {
				name: file2.name,
				maxRetries: 3
			});
			console.log(rootCid);
			form['hash2'] = rootCid;
			form["name2"] = file2.name;


			const file3 = document.getElementById("file3").files[0];
			var fileInput = document.getElementById("file3");

			var rootCid = await client.put(fileInput.files, {
				name: file3.name,
				maxRetries: 3
			});
			console.log(rootCid);
			form["hash3"] = rootCid;
			form["name3"] = file3.name;

			console.log(form);

			axios.post(`https://aavartan-backend-production.up.railway.app/clickovartan/${JSON.stringify(form)}`)
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
		}
		else {
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
								<p className={styles.event_time}><b>DATE : </b>04-02-23 to 05-02-23</p>
								<p className={styles.event_time}><b>CONTACT : </b><br/>Shalini Kashyap: 7223051902</p>
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
												autoFocus
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


									</Grid>

									<Grid item xs={12}>
										<p className={styles.uploadbtn}>Upload 3 best Images
										</p>

										<Grid item xs={12}>
											<Button
												margin="normal"
												variant="contained"
												component="label"
											>
												Upload File
												<input id="file1"
													type="file"
													hidden
													required
												/>
											</Button>
											<span>File name format: your_name1</span>
											<br />
											<br />
											<Button
												margin="normal"
												variant="contained"
												component="label"
											>
												Upload File
												<input id="file2"
													type="file"
													hidden
													required
												/>
											</Button>
											<span>File name format: your_name2</span>
											<br />
											<br />
											<Button
												margin="normal"
												variant="contained"
												component="label"
											>
												Upload File
												<input id="file3"
													type="file"
													hidden
													required
												/>
											</Button>
											<span>File name format: your_name3</span>
										</Grid>
									</Grid>
									<br></br>
								   {alert0 ? <Alert variant="outlined" severity='error'>{alertContent0}</Alert> : <></> }
								   <br></br>
								   {alert1 ? <Alert variant="outlined" severity='success'>{alertContent1}</Alert> : <></> }
								   <br></br>
									<button type="button" className={styles.registration_button} onClick={submit} >Register</button>
								</form>
							</Formik>

						</div>
					</Container>

				</div>
			</ThemeProvider>
			{loader}
		</>
	);
}
export default Clickovartan;