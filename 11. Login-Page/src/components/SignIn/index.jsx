import "./styles.css"
import {  useState } from "react"
import PasswordInput from "../PasswordInput";

function SignIn() {
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


  return (
    <div className="sign-in">
      <div className="entry-box">
        <div className="entry">
          <label htmlFor="email">E-mail</label>
          <input className="input-value"type="text" placeholder="Digite seu e-mail" id="email" onChange={(e) => setEmailInput(e.target.value)} onBlur={checkingEmailInput}/>
          <p style={{color: colorText}}>{outputForEmail}</p>
        </div>
        <div className="entry">
          <div className="password-text">
            <label htmlFor="password">Senha</label>
            <a href="/new-password">
              <p>Esqueceu sua senha?</p>
            </a>
          </div>
          <div className="password-entry">
            <PasswordInput />
          </div>
        </div>
      </div>
      <button className="btn">Entrar</button>
      <div className="footer">
        <p> Ainda não tem uma conta?</p>
        <a href="sign-up"> Inscreva-se </a>
      </div>
    </div>

  )
}
export default SignIn