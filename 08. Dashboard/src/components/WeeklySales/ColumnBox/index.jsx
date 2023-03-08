import ColumnChart from "../ColumnChart"
import GreenTriangle from "../../../assets/green-triangle.svg"
import RedTriangle from "../../../assets/red-triangle.svg"
import "./styles.css"

function ColumnBox() {
  return (
    <div className="column-box">
      <div className="text-box">
        <h1>Vendas por dia da semana</h1>
        <p> <img src={GreenTriangle} alt="" />  Dias com mais vendas</p>
        <h2>quarta-feira</h2>
        <p> <img src={RedTriangle} alt="" /> Dia com menos vendas</p>
        <h2>domingo</h2>
      </div>
      <div>
        <ColumnChart />
      </div>
    </div>
  )
}

export default ColumnBox