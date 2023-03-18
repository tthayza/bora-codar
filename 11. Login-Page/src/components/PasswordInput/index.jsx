import "./styles.css"
import showIcon from "../../assets/show.svg"
import hideIcon from "../../assets/hide.svg"
import { useState } from "react";

function PasswordInput() {
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [currentIcon, setCurrentIcon] = useState(hideIcon)
  const changingVisility = () => {
    if (passwordVisibility == "password") {
      setPasswordVisibility("text")
      setCurrentIcon(showIcon)
    } else {
      setPasswordVisibility("password")
      setCurrentIcon(hideIcon)
    }
  }
  return(
    <div className="password-entry">
      <input type={passwordVisibility} placeholder="Digite sua senha" id="password" className="input-value"/>
      <div className="icon">
        <img src={currentIcon} alt="" height={"25px"} width={"25px"} onClick={changingVisility}/>
      </div>
    </div>
  )
}
export default PasswordInput