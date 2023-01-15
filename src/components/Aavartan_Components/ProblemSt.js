import React from 'react'
import styles from './ProblemSt.module.css'
import classnames from 'classnames';
import registerform from '../../assets/ProblemSt/SampleAbstract.pdf';
import vigyaanrules from '../../assets/ProblemSt/VigyaanRules.pdf';
import BArch from '../../assets/ProblemSt/BArch.pdf';
import Biomed from '../../assets/ProblemSt/Biomed.pdf';
import Biotech from '../../assets/ProblemSt/Biotech.pdf';
import Chemical from '../../assets/ProblemSt/Chemical.pdf';
import Civil from '../../assets/ProblemSt/Civil.pdf';
import CSE from '../../assets/ProblemSt/CSE.pdf';
import ECE from '../../assets/ProblemSt/ECE.pdf';
import EE from '../../assets/ProblemSt/EE.pdf';
import IT from '../../assets/ProblemSt/IT.pdf';
import MCA from '../../assets/ProblemSt/MCA.pdf';
import MECH from '../../assets/ProblemSt/Mech.pdf';
import META from '../../assets/ProblemSt/Meta.pdf';
import Mining from '../../assets/ProblemSt/Mining.pdf';

// import circle from '../../assets/svgs/circle2.svg'

const ProblemSt = () => {
  return (
    <>
    <div className={styles.problemstatementcontainer}>
        <div className={styles.problemstatementmiddle}>
                <div className={classnames(styles.psrow, styles.pshrow)}>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href="https://docs.google.com/forms/d/e/1FAIpQLSemtta09XJhAFOMBCybYNCqZxruu6JMqclM8THaY8IMQOzLfQ/viewform?usp=send_form" target="_blank"><button className={classnames(styles.button49, styles.btnh)} role="button">REGISTRATION FORM</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfCUbeaZcqwaZRpBKhjzCFN6X4PCHqmoAjwW60uUI5ukpj7oA/viewform"  target="_blank"><button className={classnames(styles.button49, styles.btnh)} role="button">ABSTRACT SUBMISSION</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href={registerform} target="_blank"><button className={classnames(styles.button49, styles.btnh)} role="button" >RULES & REGULATIONS</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href={vigyaanrules} target="_blank"><button className={classnames(styles.button49, styles.btnh)} role="button" >SAMPLE ABSTRACT</button></a></div>
                </div>
                <div className={styles.pstitle}>
                Problem &nbsp; Statements
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href={BArch} target="_blank"><button className={styles.button49} role="button">B. ARCH</button></a></div>
                    <div className={styles.pscol}><a href={Biomed} target="_blank"><button className={styles.button49} role="button">BIOMED</button></a></div>
                    <div className={styles.pscol}><a href={Biotech} target="_blank"><button className={styles.button49} role="button">BIOTECH</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href={Chemical} target="_blank"><button className={styles.button49} role="button">CHEMICAL</button></a></div>
                    <div className={styles.pscol}><a href={Civil} target="_blank"><button className={styles.button49} role="button">CIVIL</button></a></div>
                    <div className={styles.pscol}><a href={CSE} target="_blank"><button className={styles.button49} role="button">CSE</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href={ECE} target="_blank"><button className={styles.button49} role="button">ECE</button></a></div>
                    <div className={styles.pscol}><a href={EE} target="_blank"><button className={styles.button49} role="button">EE</button></a></div>
                    <div className={styles.pscol}><a href={IT} target="_blank"><button className={styles.button49} role="button">IT</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href={MCA} target="_blank"><button className={styles.button49} role="button">MCA</button></a></div>
                    <div className={styles.pscol}><a href={MECH} target="_blank"><button className={styles.button49} role="button">MECH</button></a></div>
                    <div className={styles.pscol}><a href={META} target="_blank"><button className={styles.button49} role="button">META</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href={Mining} target ="_blank"><button className={styles.button49} role="button">MINING</button></a></div>
                </div>
        </div>
        </div>
    </>
  )
}

export default ProblemSt