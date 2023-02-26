import DonutChart from "../DonutChart"
import "./styles.css"
function GraphBoxes() {
  return (
    <div className="graph-boxes">
      <div className="title">
        <h3>Vendas fechadas</h3>
      </div>
      <div className="graph">
        <DonutChart />
      </div>
      <div className="text-footer">
        <p> <div className="dot"></div>
          Esperado 100</p>
        <p>
          <div className="dot"></div>
          Alcançado 100</p>
      </div>

    </div>
  )
}

export default GraphBoxes