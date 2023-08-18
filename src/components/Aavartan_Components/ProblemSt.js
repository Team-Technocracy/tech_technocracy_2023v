import React from 'react'
import styles from './ProblemSt.module.css'
import classnames from 'classnames';
import registerform from '../../assets/ProblemSt/SampleAbstract.pdf';
import vigyaanrules from '../../assets/ProblemSt/VigyaanRules.pdf';
import Architecture from '../../assets/ProblemSt/ARCHITECTURE.pdf';
import Biomed from '../../assets/ProblemSt/BIOMED PS.pdf';
import Biotech from '../../assets/ProblemSt/BIOTECH PS.pdf';
// import Chemical from '../../assets/ProblemSt/Chemical.pdf';
import Civil from '../../assets/ProblemSt/Civil.pdf';
import CSE from '../../assets/ProblemSt/CSE+IT+MCA.pdf';
import ECE from '../../assets/ProblemSt/ECE.pdf';
import EE from '../../assets/ProblemSt/EE.pdf';
import IT from '../../assets/ProblemSt/CSE+IT+MCA.pdf';
import MCA from '../../assets/ProblemSt/CSE+IT+MCA.pdf';
import MECH from '../../assets/ProblemSt/Mechanical.pdf';
import META from '../../assets/ProblemSt/Meta.pdf';
import Mining from '../../assets/ProblemSt/Mining.pdf';

// import circle from '../../assets/svgs/circle2.svg'

const ProblemSt = () => {
    return (
        <>
            <div className={styles.problemstatementcontainer}>
                <div className={styles.problemstatementmiddle}>
                    <div className={classnames(styles.psrow, styles.pshrow)}>
                        <div className={classnames(styles.pscol, styles.pshcol)}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSemtta09XJhAFOMBCybYNCqZxruu6JMqclM8THaY8IMQOzLfQ/viewform?usp=send_form" target="_blank" rel='noreferrer'>
                                <button className={classnames(styles.button49, styles.btnh)}>REGISTRATION FORM</button></a></div>
                        <div className={classnames(styles.pscol, styles.pshcol)}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfCUbeaZcqwaZRpBKhjzCFN6X4PCHqmoAjwW60uUI5ukpj7oA/viewform" target="_blank" rel='noreferrer'><button className={classnames(styles.button49, styles.btnh)}>ABSTRACT SUBMISSION</button></a></div>
                        <div className={classnames(styles.pscol, styles.pshcol)}><a href={registerform} target="_blank" rel='noreferrer' ><button className={classnames(styles.button49, styles.btnh)} >SAMPLE ABSTRACT</button></a></div>
                        <div className={classnames(styles.pscol, styles.pshcol)}><a href={vigyaanrules} target="_blank" rel='noreferrer'><button className={classnames(styles.button49, styles.btnh)} >RULES & REGULATIONS</button></a></div>
                    </div>
                    <div className={styles.pstitle}>
                        Problem &nbsp; Statements
                    </div>
                    <div className={styles.psrow}>
                        <div className={styles.pscol}><a href={Architecture} target="_blank" rel='noreferrer'><button className={styles.button49}>ARCH</button></a></div>
                        <div className={styles.pscol}><a href={Biomed} target="_blank" rel='noreferrer'><button className={styles.button49}>BIOMED</button></a></div>
                        <div className={styles.pscol}><a href={Biotech} target="_blank" rel='noreferrer'><button className={styles.button49}>BIOTECH</button></a></div>
                    </div>
                    <div className={styles.psrow}>
                        {/* <div className={styles.pscol}><a href={Chemical} target="_blank" rel='noreferrer'><button className={styles.button49}>CHEMICAL</button></a></div> */}
                        <div className={styles.pscol}><a href={Civil} target="_blank" rel='noreferrer'><button className={styles.button49}>CIVIL</button></a></div>
                        <div className={styles.pscol}><a href={CSE} target="_blank" rel='noreferrer'><button className={styles.button49}>CSE</button></a></div>
                    </div>
                    <div className={styles.psrow}>
                        <div className={styles.pscol}><a href={ECE} target="_blank" rel='noreferrer'><button className={styles.button49}>ECE</button></a></div>
                        <div className={styles.pscol}><a href={EE} target="_blank" rel='noreferrer'><button className={styles.button49}>EE</button></a></div>
                        <div className={styles.pscol}><a href={IT} target="_blank" rel='noreferrer'><button className={styles.button49}>IT</button></a></div>
                    </div>
                    <div className={styles.psrow}>
                        <div className={styles.pscol}><a href={MCA} target="_blank" rel='noreferrer'><button className={styles.button49}>MCA</button></a></div>
                        <div className={styles.pscol}><a href={MECH} target="_blank" rel='noreferrer'><button className={styles.button49}>MECH</button></a></div>
                        <div className={styles.pscol}><a href={META} target="_blank" rel='noreferrer'><button className={styles.button49}>META</button></a></div>
                    </div>
                    <div className={styles.psrow}>
                        <div className={styles.pscol}><a href={Mining} target="_blank" rel='noreferrer'><button className={styles.button49}>MINING</button></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProblemSt