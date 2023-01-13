import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import styles from './Alayout.module.css';
// import Image from './image.js';
import { useEffect } from 'react';

function Layout() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    Aos.init();
  }, [])

  const MouseEnter = (e) => {
    e.target.style.transform = "scale(1.2)"
    e.target.style.transition = "transform 0.5s"
  }
  const MouseLeave = (e) => {
    e.target.style.transform = "scale(1)"
  };

  return (
    <>
        <div className={styles.alayouttitle} data-aos="zoom-in-down">
          Events &nbsp; Gallery
        </div>
      <div className={styles.main}>
        <div className={styles.grid}>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img1} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img2} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img3} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img4} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img5} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
             </div>
        </div>
      </div>
    </>
  )
}

export default Layout;

