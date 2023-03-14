import "./styles.css"
import betweenClouds from "../../assets/weather-days/between-clouds.svg"
import sunnyDay from "../../assets/weather-days/sunny.svg"
import storm from "../../assets/weather-days/storm.svg"
import rain from "../../assets/weather-days/rain.svg"
import sunBetweenClouds from "../../assets/weather-days/sun-between-the-clouds.svg"

function WeatherWeek() {
  return(
    <div className="weather-week box flex">
      <div className="weather-day flex">
        <h3>Amanhã</h3>
        <img src={betweenClouds} alt="" />
        <p>21 <span>21</span>
        </p>
      </div>
      <div className="weather-day flex">
        <h3>Sexta-Feira</h3>
        <img src={sunnyDay} alt="" />
        <p> 21 <span> 21 </span></p>
      </div>
      <div className="weather-day flex">
        <h3>Sábado</h3>
        <img src={storm} alt="" />
        <p> 21 <span>21</span></p>
      </div>
      <div className="weather-day flex">
        <h3>Domingo</h3>
        <img src={rain} alt="" />
        <p>21 <span>21</span></p>
      </div>
      <div className="weather-day flex">
        <h3>Segunda-Feira</h3>
        <img src={sunBetweenClouds} alt="" />
        <p>21 <span>21</span></p>
      </div>
    </div>
  )
 }
 export default WeatherWeek