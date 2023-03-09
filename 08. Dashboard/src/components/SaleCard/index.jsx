import DonutChartSale from "./DonutChartSale"
import "./styles.css"

function SaleCard(props) {
  return(
    <div className="card">
      <div className="title">
        <h3>Vendas fechadas</h3>
      </div>
      <div className="middle grid">
          <DonutChartSale percent="70"/>
      </div>
      <div className="text-footer">
        <div className="text">
          <div className="dot ">
          </div>
            <p>
              Esperado {props.info1}
            </p>
        </div>
        <div className="text">
          <div className="dot sale"  style={{backgroundColor: "#ce9ffc"}}>
          </div>
          <p>
            Alcançado {props.info2}
          </p>
        </div>
      </div>
    </div>
  )
}
export default SaleCard