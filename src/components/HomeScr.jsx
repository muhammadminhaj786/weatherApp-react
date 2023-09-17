import React, { useEffect, useState } from 'react'
import './HomeScr.css'
import axios from 'axios'
import Footer from './Footer'
import cloud from '../assets/weather-map-meteorology-cloud-desktop-wallpaper-png-favpng-7ausECmmP1kR4kgmu2cTeaRa1.jpg'

const HomeScr = ({cloudSrc}) => {
    let [input,setInput] = useState('')
    let [data,setData] = useState({})
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
        imagePath=cloud
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
        <div className="Times text-center text-white font-bold text-2xl mt-3 mx-auto">
            {data?.timezone}
        </div>
        <div className="icn1 border w-[50%] mt-4 mx-auto">
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
        <div className="forecasts h-[10%]">
            
        </div>
    </div>
  )
}

export default HomeScr