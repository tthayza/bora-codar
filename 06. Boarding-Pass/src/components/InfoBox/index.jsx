import "./styles.css"
import qrcode from "../../assets/qrcode.svg"
import { CustomContent } from "../CustomContent"

export function InfoBox() {
  return (
    <div className="info-box">
      <div className="infos">
        <div className="informations">
          <p className="paragraph">Embarque</p>
          <h4 className="info-time ">16:15</h4>
        </div>
        <div className="informations">
        <CustomContent title={"Terminal"} text={"2"} position={"left"}/>
        </div>
        <CustomContent title={"Portão"} text={"15"} position={"left"}/>
      </div>

      <div className="qrcode">
        <img src={qrcode} alt="" />
        <p className="paragraph">Grupo de embarque: 3</p>
      </div>
    </div>
  )
}