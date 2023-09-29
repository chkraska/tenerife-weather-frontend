import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import WeatherCard from '../../components/WeatherCard/WeatherCard'

export default function HomePage() {
  const [weathers, setWeathers] = useState([])

  useEffect(()=>{
    getWeathers()
  },[])

  const getWeathers = async () => {
    const response = await fetch("http://localhost:5000/api/pogoda")
    const {data} = await response.json()
    setWeathers(data)
  }

  console.log(weathers)

  return (
    <div>
        <Header/>
        <h1>Dane pogodowe</h1>
        <div>
           {weathers.map((weather) => <WeatherCard item={weather}/>)}
        </div>
    </div>
  )
}
