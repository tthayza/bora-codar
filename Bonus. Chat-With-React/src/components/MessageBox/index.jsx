import { Message } from "../Message"
import "./styles.css"

export function MessageBox(props) {

  return (
    <div className="message-box" id="message-box">
      <div className="date">
        <p>Hoje 11:30</p>
      </div>
      {props.messagesList.map((data) => <Message text={data.text} origin={data.origin} time={data.time} />)}
    </div>
  )

}
