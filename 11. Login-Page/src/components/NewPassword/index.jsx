import PasswordInput from "../PasswordInput"
import "./styles.css"

function NewPassword() {
  return (
    <div className="entry-box">
      <div className="new-password">
        <label htmlFor="password">Nova senha</label>
        <PasswordInput />
      </div>
      <div className="confirm-password">
        <label htmlFor="password">Confirme a nova senha</label>
        <PasswordInput />
      </div>
    </div>
  )
}
export default NewPassword