import "./styles.css"
import icon from "../../assets/local-icon.svg"
import windIcon from "../../assets/wind-icon.svg"
import moistureIcon from "../../assets/moisture-icon.svg"
import rainIcon from "../../assets/rain-icon.svg"


function BoxNow(props) {
  return(
    <div className="box-now flex content">
      <div className="local">
        <p> <img src={icon} alt="ícone de local"/>Florianópolis</p>
      </div>
      <div className="temperature ">
        <div className="now-temperature">
          <h1>{props.weatherInfo?.current_weather?.temperature}</h1>
          <h4>°C</h4>
        </div>
        <div className="max-and-min">
          <p> {props.max}º
          <span>  | {props.min}º</span></p>
        </div>
      </div>
      <div className="weather-factors flex">
        <div className="wind factor-box">
          <div className="image">
            <img src={windIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Vento</p>
            <h2>{props.weatherInfo?.current_weather?.windspeed} <span>km/h</span></h2>
          </div>
        </div>
        <div className="moisture factor-box">
          <div className="image">
            <img src={moistureIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Umidade</p>
            <h2> {props.weatherInfo?.hourly?.relativehumidity_2m[props.parameterIndex]}<span>%</span></h2>
          </div>

        </div>
        <div className="rain factor-box">
          <div className="image">
            <img src={rainIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Chuva</p>
            <h2>{props.weatherInfo?.hourly?.precipitation_probability[props.parameterIndex]} <span>%</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxNow