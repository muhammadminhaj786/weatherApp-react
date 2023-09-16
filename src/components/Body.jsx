import React from 'react'
import './Body.css'

const Body = ({cloudSrc}) => {
  
  function handleUi (){
    
  } 

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
      <div className="btn1 w-[50%] mx-auto mt-7" >
        <button onClick={handleUi} className='h-[50px] bg-[#ffcc07] w-[100%] text-white text-xl'>Get Started</button>
      </div>
    </div>

    </>
  )
}

export default Body