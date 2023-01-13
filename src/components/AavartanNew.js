import React from 'react'
import './AavartanNew.css'
import Hero from './Aavartan_Components/Hero'
import Event from './Aavartan_Components/Event'
import EveningShows from './Aavartan_Components/EveningShows'
import LayoutVigyan from './Aavartan_Components/Vlayout'
import Layout from './Aavartan_Components/Alayout'
import Vigyaan from './Aavartan_Components/Vigyaan'
import ProblemSt from './Aavartan_Components/ProblemSt'

const AavartanNew = () => {
  return (
    <>
    <div className="aavartan-container">
        <Hero/>
        <Event/>
        <EveningShows/>
        <Layout/>
        <Vigyaan/>
        <ProblemSt/>
        <LayoutVigyan/>
    </div>
    </>
  )
}

export default AavartanNew