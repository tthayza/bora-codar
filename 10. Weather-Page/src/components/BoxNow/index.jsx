import "./styles.css"
import icon from "../../assets/local-icon.svg"
import windIcon from "../../assets/wind-icon.svg"
import moistureIcon from "../../assets/moisture-icon.svg"
import rainIcon from "../../assets/rain-icon.svg"

function BoxNow() {
  return(
    <div className="box-now">
      <div className="local">
        <p> <img src={icon} alt="ícone de local"/>Florianópolis</p>
      </div>
      <div className="temperature">
        <div className="now-temperature">
          <h1> 18</h1>
          <h4>°C</h4>
        </div>
        <div className="max-and-min">
          <p>22º <span>16º</span></p>
        </div>
      </div>
      <div className="weather-factors">
        <div className="wind factor-box">
          <div className="image">
            <img src={windIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Vento</p>
            <h2>17 <span>km/h</span></h2>
          </div>
        </div>
        <div className="moisture factor-box">
          <div className="image">
            <img src={moistureIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Umidade</p>
            <h2>31 <span>%</span></h2>
          </div>

        </div>
        <div className="rain factor-box">
          <div className="image">
            <img src={rainIcon} alt="" />
          </div>
          <div className="factor-info">
            <p>Chuva</p>
            <h2>10 <span>%</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxNow