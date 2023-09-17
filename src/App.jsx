import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css'
import Body from './components/Body'
import HomeScr from './components/HomeScr'
import cloudImg from './assets/Weather-512.webp'

function App() {
  let Ui = true

  function handleUi (value){
    console.log(value)
  } 

  return (
    // https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=6264c2af55653a7b45fcff5bd1cabf4e&units=metric
      <div className='parent pt-6'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body cloudSrc={cloudImg} />} />
          <Route path='Home' element={<HomeScr cloudSrc={cloudImg}/>}/>

        </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default App
