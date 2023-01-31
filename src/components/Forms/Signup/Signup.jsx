import React from "react";
import { Formik } from "formik";
import aavartan_logo from "../Signup/images/aavartan_logo.svg";
import { TextField } from "@mui/material";
import styles from "../Signup/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {

    const [status, setStatusBase] = useState("");

    const [form, set] = useState({
        "name": "",
        "email": "",
        "phno": "",
        "college": "",
        "password": "",
        "repassword": ""
    });

    function handle(e) {
        const newData = { ...form }
        newData[e.target.name] = e.target.value
        set(newData)
    }

    function submit() {
        console.log(form);
        
        if (form['name'] === "" || form['email'] === "" || form['phno'] === "" || form['college'] === "" || form['password'] === "" || form['repassword'] === "") {
            toast("Please fill all the fields", { type: "info" });
        }
        else if (form.password !== form.repassword) {
            toast("Wrong password", { type: "error" });
        }
        else {
            toast("Please wait...", { type: "info" });
            axios.post(`http://localhost:8000/signup/${JSON.stringify(form)}`)
                .then(res => {
                    console.log(res);
                    if (res.data === 1) {
                        toast("Account already exists", { type: "success" });
                    }
                    else if (res.data === 2) {
                        toast("Account already exists", { type: "info" });
                    }
                    else if (res.data === 0) {
                        toast("Error occurred", { type: "error" });
                    }
                })
        }
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

                    <div className={`${styles.signup} ${styles.signup_wrapper}`}>
                        <h2 className={styles.heading}>Sign Up</h2>
                        <Formik>
                            <form className={styles.form} >
                                <div className={styles.name}>

                                    <TextField onKeyUp={(e) => handle(e)} type="text" name="name" id="standard-basic" label="Full Name" variant="standard" className={styles.inputbox} required autoComplete="off" />
                                </div>

                                <div className={styles.email}>


                                    <TextField onKeyUp={(e) => handle(e)} name="email" id="standard-basic" label="Email" variant="standard" className={`${styles.inputbox}`} required
                                        type="email"
                                        autoComplete='none' />
                                </div>


                                <div className={styles.number}>


                                    <TextField onKeyUp={(e) => handle(e)} name="phno" id="standard-basic" label="Mobile Number" variant="standard" className={styles.inputbox} required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} autoComplete="off" />
                                </div>

                                <div className={styles.college}>


                                    <TextField onKeyUp={(e) => handle(e)} name="college" id="standard-basic" label="College" variant="standard" className={styles.inputbox} required
                                        autoComplete="off"
                                    />
                                </div>


                                <div className={styles.password}>



                                    <TextField onKeyUp={(e) => handle(e)} name="password" id="standard-basic" label="Password" variant="standard" className={styles.inputbox} required
                                        type="password" autoComplete="off"
                                    />



                                </div>


                                <div className={styles.retype_password}>

                                    <TextField onKeyUp={(e) => handle(e)} name="repassword" id="standard-basic" label="Retype Password" variant="standard" className={styles.inputbox} required
                                        type="password" autoComplete="off"
                                    />
                                </div>
                                <input type="button" onClick={submit} value="SignUp" className={styles.signup_button} />
                                <div className={styles.account_already}>
                                    <p>Already have one ?<a href="/login">Login</a></p>
                                </div>
                            </form>
                        </Formik>
                    </div>
                </div>
        </ThemeProvider>

    );
}
export default SignUp;