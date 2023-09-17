import React, { useState } from 'react'
import './Body.css'
import HomeScr from './HomeScr'
import { Link } from 'react-router-dom'

const Body = ({cloudSrc}) => {

  return (
    <>
    
    <div className='body-parent h-[95%]  pt-5 mx-auto w-[28%]' >
      <div className="image1 w-[70%]  mx-auto">
        <img src={cloudSrc}  alt="" />
      </div>
      <div className="heads text-center mt-7">
        <h1 className='text-white text-4xl font-bold '>Weather <br />
          <span className='text-[#ffcc07]'>
            ForeCasts
          </span>
        </h1>
      </div>
      <div className="btn1 w-[55%] mx-auto mt-7" >
        <div className='btn-div text-center pt-3 h-[60px] bg-[#ffcc07] w-[100%] text-white text-xl'>
          <Link to='Home' className='text-center'>Get Started</Link></div>
        {/* <button onClick={()=>setRefresh(!refresh)} className='h-[50px] bg-[#ffcc07] w-[100%] text-white text-xl'>Get Started</button> */}
      </div>
    </div>

    </>
  )
}

export default Body