import React, { useState } from 'react'
import './HomeScr.css'

const HomeScr = ({cloudSrc}) => {
    let [input,setInput] = useState([])
    const inpHandler =(e)=>{
        e.preventDefault();
        console.log("setInput",input)
        setInput('')
    }

  return (
    <div className="home-parent h-[95%] w-[28%] mx-auto pt-5">
        <div className="Inp w-[90%] mx-auto h-[70px] mt-3">
            <form onSubmit={inpHandler} >
            <input className='w-[100%] pl-4 h-[50px]' type="text"
            onChange={(e)=>setInput(e.target.value)} value={input}  placeholder='Enter a City Name' />
            </form>
        </div>
        <div className="icn1 border w-[50%] mt-4 mx-auto">
            <img src={cloudSrc} height={'100px'} width={'100%'} alt="" />
        </div>
        <div className="info text-center mt-4">
            <p className='font-bold mt-3 text-4xl text-white'>
                19
            </p>
            <p className='  text-1xl text-white'>
                karachi
            </p>
            <p className=' text-1xl text-white'>
                Clouds
            </p>
        </div>
        <div className="forecasts">

        </div>
    </div>
  )
}

export default HomeScr