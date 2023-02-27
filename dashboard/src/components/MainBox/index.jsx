import Card from "../Card"
import ColumnBox from "../ColumnBox"
import GraphBoxes from "../GraphBoxes"
import "./styles.css"

function MainBox() {
  return (
    <div className="main-box">
      <div className="header-box">
        <Card />
        <GraphBoxes title={"Vendas fechadas"} graphColor="blue" percent="70" info1="100" info2="70"/>
        <GraphBoxes title={"Meta mensal"} graphColor="coral" percent="90" info1="R$ 70K" info2="R$ 63K"/>
      </div>
      <div className="footer-box">
        <ColumnBox />
      </div>
    </div>
  )
}

export default MainBox