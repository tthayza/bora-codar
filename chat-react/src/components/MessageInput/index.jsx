import { useState } from 'react'
import send from '../../assets/send.svg'
import { Message } from '../Message'
import './styles.css'

export function MessageInput(props) {
  const [message, setMessage] = useState()

  function sendMessage() {
    if (message != "") {
      const data = new Date()
      const hours = data.getHours()
      const minutes = data.getMinutes()
      const fullTime =
        String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')

      props.addMessage({text:message, origin:"Você", time:fullTime})

      setMessage("")

    }
  }
  return(
    <div className="msg-input">
    <input type="text" id="box-input" placeholder="Digite sua mensagem" onChange={(e)=> setMessage(e.target.value)} value={message}  />
    <button className="btn-send" id="submit" onClick={sendMessage}>
      <img src={send} alt="botao para enviar mensagem" />
    </button>
    </div>
  )
}