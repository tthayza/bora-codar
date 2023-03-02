import locationicon from "../../assets/locationicon.svg"
import "./styles.css"

function BoxBlock(props) {

  return (
    <div>
      <div className='box-block'>
        <div className="img-content">
          <img src={props.img} alt="" />
        </div>
        <div className="block-message">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <div className="local-box">
            <img src={locationicon} alt="" />
            <p>{props.local}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxBlock