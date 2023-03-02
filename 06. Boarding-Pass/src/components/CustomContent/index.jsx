import "./styles.css"

export function CustomContent(props) {
  var position = props.position == "left" ? "left-text" : "right-text"
  return (
    <div className={position}>
      <p className="paragraph">{props.title}</p>
      <h4 className="info">{props.text} </h4>
    </div>
  )
}