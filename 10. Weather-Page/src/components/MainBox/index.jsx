import BoxAir from "../BoxAir"
import BoxNow from "../BoxNow"
import SunsetHistoric from "../SunsetHistoric"
import WeatherWeek from "../WeatherWeek"
import "./styles.css"
import whiteCloud from "../../assets/cloud.svg"
import grayCloud from "../../assets/cloud-gray.svg"
import { useEffect, useState } from "react"

function MainBox() {
  // temperature={temperature}
  const [weatherInfo, setWeatherInfo] = useState([])


  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-27.60&longitude=-48.55&hourly=temperature_2m,relativehumidity_2m,rain,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo')
    .then(data => {
      return data.json();
    })
    .then(data => {
      setWeatherInfo(data)
    });

  }, [])

  // let temperature = forEach(weatherInfo.current_weather)
  console.log(weatherInfo.current_weather)
  return(
    <div className="main-box">
      <div className="cloud-img first">
        <img src={whiteCloud} alt="" />
      </div>
      <div className="cloud-img second">
        <img src={grayCloud} alt="" />
      </div>
      <div className="left">
        <div className="box-now">
          <BoxNow  />
        </div>
      </div>
      <div className="right flex">
        <div className="air-and-suntime flex">
            <BoxAir />
            <SunsetHistoric />
        </div>

        <div className="days">
          <WeatherWeek />
        </div>
      </div>
    </div>
  )
}
export default MainBox