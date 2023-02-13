import { CustomContent } from "../CustomContent"
import "./styles.css"

export function PassengerBox() {
  return (
    <div className="passenger-box">
      <CustomContent title={"Passageiro"} text={"Rodrigo Terron"} position={"left"}/>
      <CustomContent title={"Assento"} text={"28A"} />
    </div>
  )


}