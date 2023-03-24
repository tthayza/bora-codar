import BoxBlock from "../BoxBlock"
import "./styles.css"

function MainBox(props) {
  return (
    <div className="main-box">
      <div className="header-main">
        <h2>Blocos recomendados</h2>
        <div className="buttons">
          <button className="list">LISTA</button>
          <button className="map">MAPA</button>
        </div>
      </div>
      <div className="blocks">
        {props.blocks.map((block) => <BoxBlock key={block.title} img={block.img} title={block.title} content={block.content} local={block.local} /> )}
      </div>
    </div>
  )
}

export default MainBox