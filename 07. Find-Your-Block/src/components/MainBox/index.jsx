import BoxBlock from "../BoxBlock"
import block1 from "../../assets/block1.png"
import block2 from "../../assets/block2.png"
import block3 from "../../assets/block3.png"
import block4 from "../../assets/block4.png"
import block5 from "../../assets/block5.png"
import block6 from "../../assets/block6.png"
import block7 from "../../assets/block7.png"
import block8 from "../../assets/block8.png"
import block9 from "../../assets/block9.png"
import "./styles.css"

function MainBox() {
  const text = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  const blocks = [
    {
      img: block1,
      title: "O Python do vovô não sobe mais",
      content: text,
      local: "São Paulo - SP"
    },
    {
      img: block2,
      title: "Todo mundo null",
      content: text,
      local: "Florianópolis - SC"
    },
    {
      img: block3,
      title: "Hoje dou exception",
      content: text,
      local: "Curitiba - PR"
    },
    {
      img: block4,
      title: "Manda Node",
      content: text,
      local: "Salvador - BA"
    },
    {
      img: block5,
      title: "Só no back-end",
      content: text,
      local: "São Paulo - SP"
    },
    {
      img: block6,
      title: "Esse anel não é de Ruby",
      content: text,
      local: "São Paulo - SP"
    },
    {
      img: block7,
      title: "Pimenta no C# dos outros é refresco",
      content: text,
      local: "Rio de Janeiro - RJ"
    },
    {
      img: block8,
      title: "EnCACHE aqui",
      content: text,
      local: "Porto Alegre - RS"
    },
    {
      img: block9,
      title: "Não valho nada mas JAVA li",
      content: text,
      local: "São Paulo - SP"
    }

  ]
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
        {blocks.map((block) => <BoxBlock key={block.title} img={block.img} title={block.title} content={block.content} local={block.local} /> )}
      </div>
    </div>
  )
}

export default MainBox