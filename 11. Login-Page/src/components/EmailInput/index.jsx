import {  useState } from "react"

function EmailInput(props) {
  const [emailInput, setEmailInput] = useState('')
  const [outputForEmail, setOutputForEmail] = useState('')
  const [colorText, setColorText] = useState('')
  const checkingEmailInput = () => {
    let user = emailInput.substring(0,emailInput.indexOf("@"))
    let domain = emailInput.substring(emailInput.indexOf("@")+1, emailInput.length)
    if ((user.length >=1) &&
      (domain.length >=3) &&
      (user.search("@")==-1) &&
      (domain.search("@")==-1) &&
      (user.search(" ")==-1) &&
      (domain.search(" ")==-1) &&
      (domain.search(".")!=-1) &&
      (domain.indexOf(".") >=1)&&
      (domain.lastIndexOf(".") < domain.length - 1)) {
        setOutputForEmail("Email válido!")
        setColorText("darkgreen")
      }
    else {
      setOutputForEmail("Digite um e-mail válido")
      setColorText("orangered")
    }
  }
  return(
    <div>
      <label htmlFor="email">{props.value}</label>
      <input className="input-value"type="text" placeholder="Digite seu e-mail" id="e-mail" onChange={(e) => setEmailInput(e.target.value)} onBlur={checkingEmailInput}/>
      <p style={{color: colorText}}>{outputForEmail}</p>
    </div>
  )
}

export default EmailInput