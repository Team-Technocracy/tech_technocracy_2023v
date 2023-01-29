import React from "react";
import { Formik } from "formik";
import aavartan_logo from "../Signup/images/aavartan_logo.svg";
import { TextField } from "@mui/material";
import styles from "../Signup/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function SignUp() {

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

                <div className={`${styles.signup} ${styles.signup_wrapper}`}>
                    <h2 className={styles.heading}>Sign Up</h2>
                    <Formik>
                        <form className={styles.form} >
                            <div className={styles.name}>

                                <TextField id="standard-basic" label="Full Name" variant="standard" className={styles.inputbox} required autoComplete="off" />
                            </div>

                            <div className={styles.email}>


                                <TextField id="standard-basic" label="Email" variant="standard" className={`${styles.inputbox}`} required
                                    type="email"
                                    autoComplete='none' />
                            </div>


                            <div className={styles.number}>


                                <TextField id="standard-basic" label="Mobile Number" variant="standard" className={styles.inputbox} required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} autoComplete="off" />
                            </div>

                            <div className={styles.college}>


                                <TextField id="standard-basic" label="College" variant="standard" className={styles.inputbox} required
                                    autoComplete="off"
                                />
                            </div>


                            <div className={styles.password}>



                                <TextField id="standard-basic" label="Password" variant="standard" className={styles.inputbox} required
                                    type="password" autoComplete="off"
                                />



                            </div>


                            <div className={styles.retype_password}>

                                <TextField id="standard-basic" label="Retype Password" variant="standard" className={styles.inputbox} required
                                    type="password" autoComplete="off"
                                />
                            </div>
                            <button className={styles.signup_button}>SignUp</button>
                            <div className={styles.account_already}>
                                <p>Already have one ?<a href="#">Login</a></p>
                            </div>
                        </form>
                    </Formik>
                </div>
            </div>
        </ThemeProvider>

    );
}
export default SignUp;