import { CustomContent } from "../CustomContent"
import "./styles.css"

export function DataBox() {

  return (
    <div className="data-box">
      <CustomContent title={"Voo"} text={"R$995"} position={"left"}/>
      <CustomContent title={"Data"} text={"23/10/2023"}/>
    </div>
  )
}