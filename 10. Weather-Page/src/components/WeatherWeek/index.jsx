import "./styles.css"
import betweenClouds from "../../assets/weather-days/between-clouds.svg"
import sunnyDay from "../../assets/weather-days/sunny.svg"
import storm from "../../assets/weather-days/storm.svg"
import rain from "../../assets/weather-days/rain.svg"
import sunBetweenClouds from "../../assets/weather-days/sun-between-the-clouds.svg"

function WeatherWeek(props) {

  const min = props.weatherInfo?.daily?.temperature_2m_min
  const max = props.weatherInfo?.daily?.temperature_2m_max
  const daysOfTheWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

  return(
    <div className="weather-week box flex">
      <div className="weather-day flex">
        <h3>Amanhã</h3>
        <img src={betweenClouds} alt="" />
        <p> {max[1]} |<span> {min[1]}</span>
        </p>
      </div>
      <div className="weather-day flex">
        <h3>{daysOfTheWeek[new Date(new Date().setDate(new Date().getDate() + 2)).getDay()]}</h3>
        <img src={sunnyDay} alt="" />
        <p>   {max[2]} |<span> {min[2]} </span></p>
      </div>
      <div className="weather-day flex">
        <h3>{daysOfTheWeek[new Date(new Date().setDate(new Date().getDate() + 3)).getDay()]}</h3>
        <img src={storm} alt="" />
        <p>   {max[3]} |<span> {min[3]}</span></p>
      </div>
      <div className="weather-day flex">
        <h3>{daysOfTheWeek[new Date(new Date().setDate(new Date().getDate() + 4)).getDay()]}</h3>
        <img src={rain} alt="" />
        <p>  {max[4]} |<span> {min[4]}</span></p>
      </div>
      <div className="weather-day flex">
        <h3>{daysOfTheWeek[new Date(new Date().setDate(new Date().getDate() + 5)).getDay()]}</h3>
        <img src={sunBetweenClouds} alt="" />
        <p>  {max[5]} |<span> {min[5]}</span></p>
      </div>
    </div>
  )
 }
 export default WeatherWeek