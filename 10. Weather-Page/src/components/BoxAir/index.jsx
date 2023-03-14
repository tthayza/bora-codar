import "./styles.css"
import leaf from "../../assets/leaf-icon.svg"
import { useEffect, useState } from "react"

function BoxAir(props) {
  const [airInfo, setAirInfo] = useState({
    hourly: {
      pm2_5: [],
      time: [],
      nitrogen_dioxide: [],
      ozone: [],
      pm10: [],
      sulphur_dioxide: [],
      european_aqi: []
    }
  })

  useEffect(() => {
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-27.60&longitude=-48.55&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,european_aqi&timezone=America%2FSao_Paulo')
    .then(data =>{
      return data.json();
    })
    .then(data => {
      console.log(data)
      setAirInfo(data);
    })
  }, [])
  const parameterIndexAir = (airInfo?.hourly?.time)?.indexOf(props.currentDate)

  const airQuality = airInfo.hourly.european_aqi[parameterIndexAir]
  let airQualityText = ""
  switch (airQuality) {
    case (airQuality <= 20 ):
      airQualityText = "Boa"
      break;
    case (airQuality <= 40):
      airQualityText = "Razoável"
      break;
    case (airQuality <= 60):
      airQualityText = "Moderado"
      break;
    case (airQuality <= 80 ):
      airQualityText = "Ruim"
      break;
    case (airQuality <= 100):
      airQualityText = "Muito ruim"
      break;
    default:
      airQualityText = "Extremamente precário"
      break;
  }

  console.log(parameterIndexAir)
  console.log(airQualityText)


  return(
    <div className="box-air box flex">
      <div className="title flex">
        <div>
          <img src={leaf} alt="" />
        </div>
        <h2>Qualidade do ar</h2>
      </div>
      <div className="middle">
        <p>{airQualityText}</p>
        <h1>{airInfo?.hourly?.european_aqi[parameterIndexAir]}</h1>
      </div>
      <div className="footer">
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.pm2_5[parameterIndexAir]}</h2>
          <p>PM2.5</p>
        </div>
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.pm10[parameterIndexAir]}</h2>
          <p>PM10</p>
        </div>
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.sulphur_dioxide[parameterIndexAir]}</h2>
          <p>SO₂</p>
        </div>
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.nitrogen_dioxide[parameterIndexAir]}</h2>
          <p>NO₂</p>
        </div>
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.ozone[parameterIndexAir]}</h2>
          <p>O₃</p>
        </div>
        <div className="substances-in-air">
          <h2>{airInfo?.hourly?.pm2_5[parameterIndexAir]}</h2>
          <p>CO</p>
        </div>
      </div>
    </div>
  )
}
export default BoxAir