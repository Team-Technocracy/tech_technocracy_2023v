import React from "react";
import { Formik } from "formik";
import aavartan_logo from "../Login/images/aavartan_logo.svg";
import { useState } from "react";
import styles from "../Login/styles.module.css";
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';




function Login() {

    const [showPassword, setShowPassword] = useState(false);
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
                <div className={styles.logo_container}>
                    <img src={aavartan_logo} className={styles.logo} alt="AAVARTAN logo"></img></div>

                <div className={`${styles.login} ${styles.login_wrapper}`}>
                    <h2 className={styles.heading}>Login Form</h2>
                    <Formik>
                        <form className={styles.form}>
                            <div className={styles.email}>


                                <TextField id="standard-basic" label="Email" variant="standard" className={`${styles.inputbox}`} required
                                    type="email"
                                    autoComplete='off'
                                />
                            </div>

                            <div className={styles.password}>


                                <TextField id="standard-basic" label="Password" variant="standard" className={styles.inputbox} required
                                    type={showPassword ? "text" : "password"}
                                />

                                {showPassword ? <i class="fa-solid fa-eye eye_open"
                                    style={{ "color": "white", "cursor": "pointer", "margin-top": "20px" }}
                                    onClick={change}></i> : <i className="fa-solid fa-eye-slash" style={{ "color": "white", "cursor": "pointer", "margin-top": "20px" }}
                                        onClick={change}></i>}


                            </div>


                            <button className={styles.login_button}>Login</button>
                            <div className={styles.new_account}>
                                <p>Need one ?<a href="#">Sign Up</a></p>
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