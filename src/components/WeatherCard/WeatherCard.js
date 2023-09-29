import React from 'react'

export default function WeatherCard({item}) {

  console.log(item)

  const date = item.timestamp.slice(4,21)
  return (
    <div>
        <p>Data: {date}</p>
    </div>
  )
}
