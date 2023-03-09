import DonutChartGoal from "./DonutChartGoal"


function GoalCard(props) {
  return(
    <div className="card grid">
      <div className="title">
        <h3>Meta mensal</h3>
      </div>
      <div className="middle grid">
          <DonutChartGoal  percent="90"/>
      </div>
      <div className="text-footer">
        <div className="text">
          <div className="dot">
          </div>
          <p>
            Esperado {props.info1}
          </p>
        </div>
        <div className="text">
          <div className="dot goal" style={{backgroundColor: "#DF9780"}}>
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