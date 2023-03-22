import BoxAir from "../BoxAir"
import BoxNow from "../BoxNow"
import SunsetHistoric from "../SunsetHistoric"
import WeatherWeek from "../WeatherWeek"
import "./styles.css"

import { useEffect, useState } from "react"

function MainBox() {
  const [weatherInfo, setWeatherInfo] = useState({
    current_weather: {
      temperature: 0,
      windspeed: 0,
      time: "",
    },
    hourly: {
      time: [],
      relativehumidity_2m: [],
      precipitation_probability: [],
    },
    daily: {
      temperature_2m_min: [],
      temperature_2m_max: [],
      sunrise: [],
      sunset: []
    }

  })

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-27.60&longitude=-48.55&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo')
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data)
      setWeatherInfo(data)
    });
  }, [])

  const currentDate = weatherInfo?.current_weather?.time || ""
  const parameterIndex = (weatherInfo?.hourly?.time)?.indexOf(currentDate)
  const min = weatherInfo?.daily?.temperature_2m_min[0]
  const max = weatherInfo?.daily?.temperature_2m_max[0]

  const formattedDate = new Date().toISOString().split('T')[0]
  const parameterIndexSun = (weatherInfo?.daily?.time)?.indexOf(formattedDate)


  return(
    <div className="main-box">
      <div className="left">
        <div className="main-left">
          <BoxNow weatherInfo={weatherInfo} parameterIndex={parameterIndex} max={max} min={min}/>
        </div>
      </div>
      <div className="right flex">
        <div className="air-and-suntime flex">
            <BoxAir currentDate={currentDate}/>
            <SunsetHistoric weatherInfo={weatherInfo} parameterIndexSun={parameterIndexSun}/>
        </div>

        <div className="days">
          <WeatherWeek weatherInfo={weatherInfo}/>
        </div>
      </div>
    </div>
  )
}
export default MainBox