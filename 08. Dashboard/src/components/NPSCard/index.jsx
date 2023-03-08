import "./styles.css"
import face from "../../assets/happy-face.svg"

function Card() {
  return (
    <div className="card">
      <div className="title">
        <h3>NPS geral</h3>
      </div>
      <div className="result">
        <img src={face} alt="" />
        <h2>Excelente!</h2>
      </div>
      <div className="footer">
        <p>NPS Score 75</p>
      </div>

    </div>
  )
}
export default Card