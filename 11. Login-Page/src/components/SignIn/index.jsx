import "./styles.css"

import PasswordInput from "../PasswordInput";
import EmailInput from "../EmailInput";

function SignIn(props) {
  return (
    <div className="sign-in">
      <div className="entry-box">
        <div className="entry">
          <EmailInput value="Email" />
        </div>
        <div className="entry">
          <div className="password-text">
            <a className="forget-password" href="/new-password">Esqueceu sua senha?</a>
          </div>
          <div className="password-entry">
            <PasswordInput value="Senha"/>
          </div>
        </div>
      </div>
      <button className="btn">Entrar</button>
      <div className="footer">
        <p> Ainda não tem uma conta?</p>
        <a href="/sign-up"> Inscreva-se </a>
      </div>
    </div>

  )
}
export default SignIn