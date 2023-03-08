import Card from "../NPSCard"
import SaleCard from "../SaleCard"
import GoalCard from "../GoalCard"
import ColumnBox from "../WeeklySales/ColumnBox"
import "./styles.css"

function MainBox() {
  return (
    <div className="main-box">
      <div className="header-box">
        <Card />
        <SaleCard   info1="100" info2="70"/>
        <GoalCard   info1="R$ 70K" info2="R$ 63K"/>
      </div>
      <div className="footer-box">
        <ColumnBox />
      </div>
    </div>
  )
}

export default MainBox