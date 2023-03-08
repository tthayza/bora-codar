import DonutChartGoal from "./DonutChartGoal"
import "./styles.css"

function GoalCard(props) {
  return(
    <div className="container">
      <div className="title">
        <h3>Meta mensal</h3>
      </div>
      <div className="graph">
          <DonutChartGoal  />
      </div>
      <div className="text-footer-goals">
        <div className="first-text">
          <div className="dot">
          </div>
          <p>
            Esperado {props.info1}
          </p>
        </div>
        <div className="second-text">
          <div className="dot goal">
          </div>
          <p>
            Alcançado {props.info2}
          </p>
        </div>
      </div>
      </div>
  )
}
export default GoalCard