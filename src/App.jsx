import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import HomeScr from './components/HomeScr'
import cloudImg from './assets/Weather-512.webp'

function App() {
  let Ui = true
  const [count, setCount] = useState(0)

  return (
    // https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=6264c2af55653a7b45fcff5bd1cabf4e&units=metric
    <div className='parent pt-6'>
      {!Ui?<Body cloudSrc={cloudImg}/>:<HomeScr cloudSrc={cloudImg}/>}
    </div>
    
  )
}

export default App
