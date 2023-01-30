import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Registration/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps } from "@mui/material";
import { useParams } from "react-router-dom";
import events from '../../../assets/datas/EventsDatas'
import Member from "./Member";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Registration(props) {

	const { id } = useParams();
	const data = {
		name: "",
		desc: "",
		teamSize: 0,
		teamMin: 0
	}

	events.map((event) => {
		// console.log(typeof event.id);
		if (String(event.id) === id) {
			data.name = event.title;
			data.desc = event.details;
			data.teamSize = event.teamSize;
			data.teamMin = event.teamMin;
		}
	});

	console.log(data);

	const fields = [];
	for (let i = 1; i < data.teamSize; i++) {
		fields.push(<Member />);
	}

	const [attri, setAttri] = useState(false);
	const [toggle, setToggle] = useState(false);

	function changeState() {
		setToggle(!toggle);
		setAttri(!attri);
	}

	return (
		<ThemeProvider className={styles} theme={darkTheme}>
			<div className={styles.container}>

				<Container>
					<div className={styles.description}>
						{/* <div className={styles.event_image}></div> */}
						<div>
							<h3 className={styles.event_title}>{data.name}</h3>
							<p className={styles.event_description}> {data.desc}
							</p>
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
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
											variant="standard"
											autoFocus
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_name"
											name="team_leader_name"
											label="Team Leader Name"
											variant="standard"
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="team_leader_mail"
											name="team_leader_mail"
											label="Team Leader Email id"
											variant="standard"
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="college_name"
											name="college_name"
											label="College"
											variant="standard"
											autoComplete='off'
										/>
									</Grid>

									<p className={styles.team_details}>Team Member Details</p>
									{fields}
								</Grid>
								<button className={styles.registration_button}>Register</button>
							</form>
						</Formik>

					</div>
				</Container>

			</div>
		</ThemeProvider>
	);
}
export default Registration;