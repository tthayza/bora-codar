import "./styles.css"
import leaf from "../../assets/leaf-icon.svg"

function BoxAir() {
  return(
    <div className="box-air box flex">
      <div className="title flex">
        <div>
          <img src={leaf} alt="" />
        </div>
        <h2>Qualidade do ar</h2>
      </div>
      <div className="middle">
        <p>Boa</p>
        <h1>21</h1>
      </div>
      <div className="footer">
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
        <div className="substances-in-air">
          <h2>12.9</h2>
          <p>PML25</p>
        </div>
      </div>
    </div>
  )
}
export default BoxAir