import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'
import group1 from '../../assets/svgs/Group2.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="hero-container" data-aos="zoom-in-down" id='about'>
        <div className="hero-title">Aavartan</div>
        <div className="hero-wrapper">
            <div className="hero-wrapper-left">
                <div className="hero-wrapper-heading">About</div>
                <div className="hero-wrapper-description">
                All the theories and formulae boils down to most crucial thing in engineering-Application. This ideology forms the basis of an ocassion which lets the engineer in every student fly and air the spark within. And we have named it as "AAVARTAN". It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India, in all standards. Aavartan is the celebration of engineering, science and technology organized wholly and solely by the students of NIT Raipur.
                </div>
                <div className="hero-wrapper-btn">
                   <Link to="/aavartan">
                   <button>
                      Explore
                  </button>
                    </Link> 
                </div>
            </div>
            <div className="hero-wrapper-right" id='demo'>
              <img src={group1} alt=""  />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero