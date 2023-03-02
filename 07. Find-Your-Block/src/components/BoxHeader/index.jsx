import leftimage from "../../assets/leftimage.svg"
import rightimage from "../../assets/rightimage.svg"
import locationicon from "../../assets/locationicon.svg"
import searchicon from "../../assets/searchicon.svg"
import downarrow from "../../assets/downarrow.svg"
import "./styles.css"

function BoxHeader() {
  return (
    <div className="box-header">
      <div className ="left-image">
        <img src={leftimage} alt=""  className="custom-image"/>
      </div>
      <div className="content-header">
        <section className="message">
          <p>FIND YOUR BLOCK</p>
          <h1>Encontre os <span>melhores blocos</span>  <br /> de carnaval de 2023</h1>
        </section>
        <section className="search-local">
          <p>
            <img src={searchicon} alt="" />
            Pesquise por nome
            </p>
          <p>
            <img src={locationicon} alt="" />
            Selecione uma cidade
            <img src={downarrow} alt="" />
          </p>
          <button className="find-button">Buscar agora</button>
        </section>
      </div>
      <div className ="right-image">
        <img src={rightimage} alt=""  className="custom-image"/>
      </div>
    </div>
  )
}

export default BoxHeader