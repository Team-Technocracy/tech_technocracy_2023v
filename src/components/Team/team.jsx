import React from "react";
// import { Link } from "react-router-dom";

import Facultysec from "./FacultyIncharges/facultyinchargesec";
// import HeadCoordinatorSec from "./HeadCoordinators/headcoordinatorsec";
import CoOrdinatorSec from "./Coordinators/coordinatorsec";
import CoreMemberSec from "./CoreMembers/corememberssec";
import styles from "./team.module.css";
//  import TechTeam from './TechTeam/techteamsec'

// const Button = () => {
//   return (
//     <div className={styles.button_div}>
//       <Link to="/JoinUs" className={styles.button}>
//         Join Us!
//       </Link>
//     </div>
//   );
// };

const Team = () => {
  return (
    <div id="team" className={styles.team}>
      <Facultysec />
      {/* <HeadCoordinatorSec /> */}
      <CoOrdinatorSec />
      <CoreMemberSec />
      {/* <TechTeam /> */}
      {/* <Button /> */}
    </div>
  );
};

export default Team;
