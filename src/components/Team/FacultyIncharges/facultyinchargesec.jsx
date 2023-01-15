import React from "react";
import styles from "./facultyinchargesec.module.css";
import SideNav from "../../utils/Header/Headers";
import FacultyCard from "./facultyIncharge/facultyincharge";
import facultyimage from "../../../images/faculty/Faculty.png";


const FacultySec = () => {
  return (
    <div className={styles.facultysec}>
      <SideNav name="Faculty Incharge" />
      <FacultyCard
        quote="Since it's inception, The Technocracy has been working on providing the pathways to young minds to model their fascinations into reality and this year, The Technocracy will be delivering even more"
        designation="Dr. Shubhankar Bhowmick, Faculty Incharge, Technocracy"
        image={facultyimage}
      />
    </div>
  );
};

export default FacultySec;
