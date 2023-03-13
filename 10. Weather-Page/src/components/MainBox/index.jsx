import BoxAir from "../BoxAir"
import BoxNow from "../BoxNow"
import SunsetHistoric from "../SunsetHistoric"
import WeatherWeek from "../WeatherWeek"
import "./styles.css"
import whiteCloud from "../../assets/cloud.svg"
import grayCloud from "../../assets/cloud-gray.svg"

function MainBox() {
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
          <BoxNow />
        </div>
      </div>
      <div className="right">
        <div className="air-and-suntime">
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