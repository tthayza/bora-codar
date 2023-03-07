import DonutChart from "../DonutChart"
import "./styles.css"

function GraphBoxes(props) {

  return (
    <div className="graph-boxes">

      <div className="container" >
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="graph">
           <DonutChart color={props.graphColor} limit={props.percent} />
        </div>
        <div className="text-footer">
          <div className="first-text">
            <div className={`dot`}>
            </div>
              <p>
                Esperado {props.info1}
              </p>
          </div>
          <div className="second-text">
            <div className={`dot ${props.graphColor == "blue" ? "sale" : "goal"}`}>
            </div>
            <p>
              Alcançado {props.info2}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphBoxes