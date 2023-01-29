import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Registration/styles.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  Container, TextField,Grid, useThemeProps } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Registration(props) {

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
                            <h3 className={styles.event_title}>{props.title}</h3>
                            <p className={styles.event_description}> {props.description}
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
                                            id="college_name"
                                            name="college_name"
                                            label="College"
                                            variant="standard"
                                            autoComplete='off'
                                        />
                                    </Grid>
                                   
                                    <p className={styles.team_details}>Team Member Details</p>

                                    <div>
                                        <div className={`${styles.common} ${styles.name_1}`}>
                                            <div>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="full_name_1"
                                                    required

                                                    id="full_name_1"
                                                    label="Full Name"
                                                    autoFocus
                                                    variant="standard"
                                                    autoComplete='none'
                                                />
                                                </Grid>
                                            </div>
                                            <div>
                                            <Grid marginLeft={1} item xs={12}>
                                                <TextField
                                                    id="number_1"
                                                    label="Mobile Number"
                                                    type="text"

                                                    required
                                                    variant="standard"
                                                    autoComplete='none'
                                                />
                                                </Grid>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles.common} ${styles.name_2}`}>
                                            <div>
                                            <Grid item xs={12} >
                                                <TextField
                                                    name="full_name_2"
                                                    required

                                                    id="full_name_2"
                                                    label="Full Name"
                                                    autoFocus
                                                    variant="standard"
                                                    autoComplete='none'
                                                />
                                               </Grid>
                                            </div>
                                            <div>
                                            
                                                <Grid marginLeft={1} item xs={12}>
                                                    <TextField
                                                        id="number_2"
                                                        label="Mobile Number"
                                                        type="text"

                                                        required
                                                        variant="standard"
                                                        autoComplete='none'
                                                    />
                                                </Grid>
                                                
                                            </div>

                                            <div className={styles.show_button}>
                                                <button type="button" className={toggle ? styles.hide : styles.add} onClick={changeState}><i className="fa-solid fa-plus fa" style={{ "color": "gray" }}></i></button></div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={toggle ? styles.name_3 : styles.hide}>
                                            <div>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="full_name_3"
                                                    required={attri}

                                                    id="full_name_3"
                                                    label="Full Name"
                                                    autoFocus
                                                    variant="standard"
                                                    autoComplete='none'
                                                />
                                                </Grid>
                                                
                                            </div>
                                            <div>
                                            <Grid marginLeft={1} item xs={12}>
                                                <TextField
                                                    id="number_3"
                                                    label="Mobile Number"
                                                    type="text"
                                                    required={attri}
                                                    variant="standard"
                                                    autoComplete='none'
                                                />
                                                </Grid>
                                                
                                            </div>
                                            <div className={styles.hide_button}>
                                                <button type="button" className={toggle ? styles.add : styles.hide} onClick={changeState}><i className="fa-solid fa-minus" style={{ "color": "gray" }}></i></button></div>

                                        </div>
                                    </div>
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