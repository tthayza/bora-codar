import "./styles.css"

import PasswordInput from "../PasswordInput";
import EmailInput from "../EmailInput";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="entry-box">
        <div className="entry">
        <label htmlFor="e-mail">E-mail</label>
          <EmailInput />
        </div>
        <div className="entry">
          <div className="password-text">
            <a className="forget-password" href="/new-password">Esqueceu sua senha?</a>
          </div>
          <div className="password-entry">
          <label htmlFor="password">Senha</label>
            <PasswordInput />
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