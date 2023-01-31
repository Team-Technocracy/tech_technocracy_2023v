import React from "react";
import { Formik } from "formik";
import aavartan_logo from "../Login/images/aavartan_logo.svg";
import { useState } from "react";
import styles from "../Login/styles.module.css";
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

function Login() {

	const [showPassword, setShowPassword] = useState(false);

	const [form, set] = useState({
		"email": "",
		"password": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		if (form['email'] === "" || form['password'] === "") {
			toast("Please fill all the fields", { type: "info" });
		}
		else {
			toast("Please wait...", { type: "info" });
			axios.post(`http://localhost:8000/login/${JSON.stringify(form)}`)
				.then(res => {
					console.log(res.data);
					if (res.data === -1) {
						toast("Wrong password", { type: "error" });
					}
					else if (res.data === -2) {
						toast("Please create your account first", { type: "info" });
					}
					else if (res.data === 0) {
						toast("Error occurred", { type: "error" });
					}
					else if (res.data.email === form['email']) {
						const cookies = new Cookies();
						cookies.set('name', res.data.name);
						cookies.set('mail', String(res.data.email));
						cookies.set('phone', res.data.phone);
						cookies.set('college', res.data.college);
						window.location.href = "/events";
						toast("Logged in", { type: "success" });
					}
				})
		}
	}

	function change() {
		setShowPassword(!showPassword);
	}

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<div className={styles.container}>
				{/* <ToastContainer /> */}
				<div className={styles.logo_container}>
					<img src={aavartan_logo} className={styles.logo} alt="AAVARTAN logo"></img></div>

				<div className={`${styles.login} ${styles.login_wrapper}`}>
					<h2 className={styles.heading}>Login Form</h2>

					<Formik>
						<form className={styles.form}>
							<div className={styles.email}>
								<TextField name="email" id="standard-basic" label="Email" variant="standard" className={`${styles.inputbox}`} required
									type="email"
									autoComplete='off'
									onKeyUp={(e) => handle(e)}
								/>
							</div>

							<div className={styles.password}>
								<TextField id="standard-basic" label="Password" variant="standard" className={styles.inputbox} required
									type={showPassword ? "text" : "password"}
									onKeyUp={(e) => handle(e)}
									name="password"
								/>

								{showPassword ? <i class="fa-solid fa-eye eye_open"
									style={{ "color": "white", "cursor": "pointer", "margin-top": "20px" }}
									onClick={change}></i> : <i className="fa-solid fa-eye-slash" style={{ "color": "white", "cursor": "pointer", "margin-top": "20px" }}
										onClick={change}></i>}
							</div>


							<input type="button" value="Login" className={styles.login_button} onClick={submit} />
							<div className={styles.new_account}>
								<p>Need one ?<a href="/signup">Sign Up</a></p>
							</div>
							<div className={styles.reset_password}>
								<p>Need Help ?<a href="#">Reset Password</a></p>
							</div>
						</form>
					</Formik>
				</div>
			</div>
		</ThemeProvider>
	);
}
export default Login;