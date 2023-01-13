import React from 'react'
import styles from './ProblemSt.module.css'
import classnames from 'classnames';

import circle from '../../assets/svgs/circle2.svg'

const ProblemSt = () => {
  return (
    <>
    <div className={styles.problemstatementcontainer}>
        <div className={styles.problemstatementmiddle}>
                <div className={classnames(styles.psrow, styles.pshrow)}>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href=""><button className={classnames(styles.button49, styles.btnh)} role="button">REGISTRATION FORM</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href=""><button className={classnames(styles.button49, styles.btnh)} role="button">ABSTRACT SUBMISSION</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href=""><button className={classnames(styles.button49, styles.btnh)} role="button">RULES & REGULATIONS</button></a></div>
                    <div className={classnames(styles.pscol, styles.pshcol)}><a href=""><button className={classnames(styles.button49, styles.btnh)} role="button">SAMPLE ABSTRACT</button></a></div>
                </div>
                <div className={styles.pstitle}>
                Problem &nbsp; Statements
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">B. ARCH</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">BIOMED</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">BIOTECH</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">CHEMICAL</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">CIVIL</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">CSE</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">ECE</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">EE</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">IT</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">MCA</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">MECH</button></a></div>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">META</button></a></div>
                </div>
                <div className={styles.psrow}>
                    <div className={styles.pscol}><a href=""><button className={styles.button49} role="button">MINING</button></a></div>
                </div>
        </div>
        </div>
    </>
  )
}

export default ProblemSt