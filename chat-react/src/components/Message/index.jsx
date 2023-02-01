import "./styles.css"

export function Message(props) {
  var msgClass = "message"
  var colorBg = "message-first"

  if (props.origin == "Você") {
    msgClass = msgClass + " message-sent"
    colorBg = "message-second"
  }


  return (
    <div className={msgClass}>
    <p className="info-first">
      {props.origin} - {props.time}</p>
    <p className={colorBg}>
      {props.text}
    </p>
  </div>
  )
}