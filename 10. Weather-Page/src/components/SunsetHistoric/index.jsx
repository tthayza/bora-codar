import "./styles.css"
import sunIcon from "../../assets/sun-icon.svg"
import chartSun from "../../assets/chart.svg"

function SunsetHistoric() {
  return(
    <div className="sunset-historic box flex">
      <div className="title flex">
        <div >
          <img src={sunIcon} alt="ícone de sol com relógio" />
        </div>
        <h2>
          Histórico do sol
        </h2>
      </div>
      <div className="chart">
        <img src={chartSun} alt="" />

      </div>
    </div>

  )
 }
 export default SunsetHistoric