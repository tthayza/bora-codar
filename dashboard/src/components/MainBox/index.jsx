import Card from "../Card"
import ColumnBox from "../ColumnBox"
import GraphBoxes from "../GraphBoxes"
import "./styles.css"

function MainBox() {
  return (
    <div className="main-box">
      <div className="header-box">
        <Card />
        <GraphBoxes />
        <GraphBoxes />
      </div>
      <div className="footer-box">
        <ColumnBox />
      </div>
    </div>
  )
}

export default MainBox