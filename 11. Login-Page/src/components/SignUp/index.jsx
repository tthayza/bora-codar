import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import "./styles.css"

function SignUp() {
  return (
    <div className="sign-up box">
      <div className="entry-box">
      <label htmlFor="e-mail">Informe o e-mail</label>
        <EmailInput />
      </div>
      <div className="entry-box">
      <label htmlFor="e-mail">Confirme o e-mail</label>
        <EmailInput />
      </div>
      <div className="entry-box">
      <label htmlFor="password">Informe a senha</label>
        <PasswordInput />
      </div>
      <div className="entry-box">
      <label htmlFor="password">Confirme a senha</label>
        <PasswordInput />
      </div>
      <a className="redirection" href="/"> Clique aqui para efetuar o login</a>
    </div>
  )
}
export default SignUp