import "./styles.css"
function ColumnChart() {
  return (
    <div className="container-graph">
      <div>
        <div className="grid-line" value="50%"></div>
      </div>
      <section className="bar-container">
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 20}}></div>
          <div className="day">dom</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 70}}></div>
          <div className="day">seg</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 56}}></div>
          <div className="day">ter</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 100}}></div>
          <div className="day">qua</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 85}}></div>
          <div className="day">qui</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 75}}></div>
          <div className="day">sex</div>
        </div>
        <div className="bar">
          <div className="column-bar" style={{maxHeight: 50}}></div>
          <div className="day">sab</div>
        </div>
      </section>

    </div>
  )
}

export default ColumnChart