import React from "react";
import styles from "../Styles/styles.module.css";
import { Container, TextField, Grid, useThemeProps } from "@mui/material";

const Member = ({name, phone}) => {
	return (
		<div>
			<div className={`${styles.common} ${styles.name_1}`}>
				<div>
					<Grid item xs={12}>
						<TextField
							name={name}
							required
							id="full_name_1"
							label="Full Name"
							
							variant="outlined"
							autoComplete='none'
						/>
					</Grid>
				</div>
				<div>
					<Grid marginLeft={1} item xs={12}>
						<TextField
							name={phone}
							id="number_1"
							label="Mobile Number"
							type="text"
							required
							variant="outlined"
							autoComplete='none'
						/>
					</Grid>
				</div>

			</div>
		</div>
	)
};

export default Member;