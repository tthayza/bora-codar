import leftimage from "../../assets/leftimage.svg"
import locationicon from "../../assets/locationicon.svg"
import searchicon from "../../assets/searchicon.svg"
import downArrow from "../../assets/downarrow.svg"
import "./styles.css"
import { useState } from "react"

function BoxHeader(props) {
  const [blockName, setBlockName] = useState('')
  const [cityName, setCityName] = useState('')
  const states = props.blocks.map((block) => block.estado)
  const noRepeatStates = [...new Set(states)]
  console.log(noRepeatStates)
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
          <label htmlFor="name">
            <img src={searchicon} alt="" />
          </label>
          <input
            type="text"
            id="name"
            placeholder="Pesquise por nome"
            onChange={(e) => setBlockName(e.target.value)}/>
          <label htmlFor="city">
            <img src={locationicon} alt="" />
          </label>
          <input
            id="city"
            type="text"
            placeholder="Selecione uma cidade"
            onChange={(e) => setCityName(e.target.value)}
            />
          <select className="select-city" >
            <option value=""> </option>
            {noRepeatStates.map((data)=> {console.log(data)
              return <option  value={data}>{data}</option>})}
          </select>
          <button
            className="find-button"
            onClick={() => props.findingBlock(blockName)}
            >Buscar agora</button>
        </section>
      </div>
      <div className ="right-image">
      </div>
    </div>
  )
}

export default BoxHeader