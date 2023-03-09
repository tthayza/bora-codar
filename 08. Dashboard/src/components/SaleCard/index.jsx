import DonutChartSale from "./DonutChartSale"
import "./styles.css"

function SaleCard(props) {
  return(
    <div className="container">
      <div className="title">
        <h3>Vendas fechadas</h3>
      </div>
      <div className="graph">
          <DonutChartSale percent="70"/>
      </div>
      <div className="text-footer-sale">
        <div className="first-text">
          <div className="dot ">
          </div>
            <p>
              Esperado {props.info1}
            </p>
        </div>
        <div className="second-text">
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