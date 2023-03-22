import "./styles.css"
import sunIcon from "../../assets/sun-icon.svg"
import chartSun from "../../assets/chart.svg"

function SunsetHistoric(props) {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const currentHour = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2,'0')


  const hoursSunrise = new Date(props.weatherInfo?.daily?.sunrise[props.parameterIndexSun]).getHours()
  const minutesSunrise = new Date(props.weatherInfo?.daily?.sunrise[props.parameterIndexSun]).getMinutes()

  const hoursSunset = new Date(props.weatherInfo?.daily?.sunset[props.parameterIndexSun]).getHours()
  const minutesSunset = new Date(props.weatherInfo?.daily?.sunset[props.parameterIndexSun]).getMinutes()

  const sunriseTime = hoursSunrise + ':' + minutesSunrise
  const sunsetTime = hoursSunset + ':' + minutesSunset

  const sunPosition = hours < 6 ? 0 : hours > 18 ? 100 : (hours - 6) * 100 / 12


  return(
    <div className="sunset-historic box content flex">
      <div className="title flex">
        <div >
          <img src={sunIcon} alt="ícone de sol com relógio" />
        </div>
        <h2>
          Histórico do sol
        </h2>
      </div>
      <div className="sun-chart-wrapper">
        <div className="sun-chart"  style={{ "--pos-x": sunPosition }}>
          <div className="chart ">
            <img src={chartSun} alt="" />
          </div>
          <time className="time-now">{currentHour}</time>
        </div>
      </div>
      <div className="time-sun">
            <time className="sunrise">{sunriseTime}</time>
            <time className="sunset">{sunsetTime}</time>

          </div>
    </div>

  )
 }
 export default SunsetHistoric