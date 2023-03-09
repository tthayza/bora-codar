import Card from "../src/components/NPSCard"
import SaleCard from "../src/components/SaleCard"
import GoalCard from "../src/components/GoalCard"
import ColumnBox from "../src/components/WeeklySales/ColumnBox"
import ColumnChart from "./components/WeeklySales/ColumnChart"

function App() {


  return (
    <div className="app grid">
      <Card />
      <SaleCard />
      <GoalCard />
      <div className="card column">
        <ColumnBox />
        <ColumnChart />
      </div>
    </div>
  )
}

export default App
