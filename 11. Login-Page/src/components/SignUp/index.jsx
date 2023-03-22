import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import "./styles.css"

function SignUp() {
  return (
    <div className="sign-up box">
      <div className="entry-box">
        <EmailInput value="Informe o e-mail"/>
      </div>
      <div className="entry-box">
        <EmailInput value="Confirme o e-mail"/>
      </div>
      <div className="entry-box">
        <PasswordInput value="Informe a senha"/>
      </div>
      <div className="entry-box">
        <PasswordInput value="Confirme a senha"/>
      </div>
      <a className="redirection" href="/sign-in"> Clique aqui para efetuar o login</a>
    </div>
  )
}
export default SignUp