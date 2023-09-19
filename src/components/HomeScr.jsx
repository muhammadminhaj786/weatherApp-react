import React, { useEffect, useState } from 'react'
import './HomeScr.css'
import axios from 'axios'
import Footer from './Footer'
import mist from '../assets/mist.png'
import clouds from '../assets/clouds.png'
import clear from '../assets/clear.png'
import rain from '../assets/rain.png'
import drizzle from '../assets/drizzle.png'
import win from '../assets/wind.png'
import hum from '../assets/humidity.png'



const HomeScr = ({cloudSrc}) => {
    let [input,setInput] = useState('')
    let [data,setData] = useState({})
    const [timezone, setTimezone] = useState(null);
    useEffect(()=>{
        callApi('karachi')
    },[])
    const callApi =async (cityName)=>{
        try {
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6264c2af55653a7b45fcff5bd1cabf4e&units=metric`)
            console.log('data',data)
            setData(data.data)
        } catch (error) {
            alert(error.message)
            console.log(error.message)
        }
    }
    const inpHandler =(e)=>{
        e.preventDefault();
        console.log("setInput",input)
        setInput('')
        callApi(input)
    }
    let imagePath = cloudSrc

    if(data?.weather&&data?.weather[0]?.main=="Haze"){
        imagePath=mist
    }else if(data?.weather&&data?.weather[0]?.main=="Clouds"){
        imagePath=clouds
    }else if(data?.weather&&data?.weather[0]?.main=="Clear"){
        imagePath=clear
    }else if(data?.weather&&data?.weather[0]?.main=="Rain"){
        imagePath=rain
    }else if(data?.weather&&data?.weather[0]?.main=="Drizzle"){
        imagePath=drizzle
    }else if(data?.weather&&data?.weather[0]?.main=="Smoke"){
        imagePath=mist
    }else{
        imagePath = cloudSrc
    }

  return (
    <div className="home-parent h-[95%] w-[28%] mx-auto pt-5">
        <div className="Inp w-[90%] mx-auto h-[70px] mt-3">
            <form onSubmit={inpHandler} >
            <input className='w-[100%] pl-4 h-[50px]' type="text"
            onChange={(e)=>setInput(e.target.value)} value={input}  placeholder='Enter a City Name' />
            </form>
        </div>
        {/* <div className="Times text-center text-white font-bold text-2xl mt-3 mx-auto">
            <p>Local Time: {formatToLocalTime(data)}</p>
        </div> */}
        <div className="icn1 w-[50%] mt-4 mx-auto">
            <img src={imagePath} height={'100px'} width={'100%'} alt="" />
             
        </div>
        <div className="info text-center mt-4">
            <p className='font-bold mt-3 text-4xl text-white'>
                {data?.main?.temp}
            </p>
            <p className='  text-1xl text-white'>
                {data?.name}
            </p>
            <p className=' text-1xl text-white'>
                {data?.weather && data?.weather[0].main}
            </p>
        </div>
        <div className="forecasts flex justify-between pl-2 pr-2 mt-6">
            <div className='flex '>
                <img src={win} height={'50px'} width={'50px'} alt="" />
                <p className='text-center text-white mt-4 ml-2'>
                    {data?.main?.humidity}
                </p>
            </div>
            <div className='flex'>
                <img src={hum} height={'50px'} width={'50px'} alt="" />
                <p className='text-center text-white mt-4 ml-2'>
                    {data?.wind?.speed}
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeScr