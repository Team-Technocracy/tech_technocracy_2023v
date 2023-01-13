import React from 'react'
import './Vigyaan.css'
import vigyaanLappy from '../../assets/svgs/2.png'
import vigyaanPhone from '../../assets/svgs/1.png'

const Vigyaan = () => {
  return (
    <>
    <div className="vigyaan-container">
       <img src={vigyaanLappy} alt="" width="100%" className='vigyaan-lappy'/>
       <img src={vigyaanPhone} alt="" width="100%" className='vigyaan-phone'/>
    </div>
    </>
  )
}

export default Vigyaan