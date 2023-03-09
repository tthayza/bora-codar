import face from "../../assets/happy-face.svg"
import "./styles.css"

function Card() {
  return (
    <div className="card nps">
      <div className="title">
        <h3>NPS geral</h3>
      </div>
      <div className="middle grid">
        <img src={face} alt="" />
        <h2>Excelente!</h2>
      </div>
      <div className="text">
        <p>NPS Score 75</p>
      </div>

    </div>
  )
}
export default Card