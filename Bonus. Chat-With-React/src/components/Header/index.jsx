import "./styles.css"
import avatar from '../../assets/avatar.svg'
import close from '../../assets/close.svg'
import status from '../../assets/status.svg'

export function Header() {
  return (
    <div className="header">
      <div className="profile-info">
        <img src={avatar} alt="avatar cecilia" />
        <div className="info">
          <h4>Cecilia Sassaki</h4>
          <img src={status} alt="status" />
        </div>
      </div>
      <img className="close-btn" src={close} alt="botão de fechar" />
    </div>
  )
}