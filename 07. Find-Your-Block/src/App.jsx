import BoxHeader from './components/BoxHeader'
import MainBox from './components/MainBox'
import block1 from "../src/assets/block1.png"
import block2 from "../src/assets/block2.png"
import block3 from "../src/assets/block3.png"
import block4 from "../src/assets/block4.png"
import block5 from "../src/assets/block5.png"
import block6 from "../src/assets/block6.png"
import block7 from "../src/assets/block7.png"
import block8 from "../src/assets/block8.png"
import block9 from "../src/assets/block9.png"
import { useState } from 'react'


function App(props) {
  const text = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  const [filteredBlocks, setFilteredBlocks] = useState([])
  const blocks = [
    {
      img: block1,
      title: "O Python do vovô não sobe mais",
      content: text,
      local: "São Paulo",
      estado: "SP"
    },
    {
      img: block2,
      title: "Todo mundo null",
      content: text,
      local: "Florianópolis",
      estado: "SC"
    },
    {
      img: block3,
      title: "Hoje dou exception",
      content: text,
      local: "Curitiba",
      estado: "PR"
    },
    {
      img: block4,
      title: "Manda Node",
      content: text,
      local: "Salvador",
      estado: "BA"
    },
    {
      img: block5,
      title: "Só no back-end",
      content: text,
      local: "São Paulo",
      estado: "SP"
    },
    {
      img: block6,
      title: "Esse anel não é de Ruby",
      content: text,
      local: "São Paulo",
      estado: "SP"
    },
    {
      img: block7,
      title: "Pimenta no C# dos outros é refresco",
      content: text,
      local: "Rio de Janeiro",
      estado: "RJ"
    },
    {
      img: block8,
      title: "EnCACHE aqui",
      content: text,
      local: "Porto Alegre",
      estado: "RS"
    },
    {
      img: block9,
      title: "Não valho nada mas JAVA li",
      content: text,
      local: "São Paulo",
      estado: "SP"
    }

  ]

  const findingBlock = (blockName) => {
    const currentBlock = blocks.filter(block => (block.title == blockName))
    console.log(currentBlock)
    setFilteredBlocks(currentBlock)
  }

  return (
    <div className='container'>
      <BoxHeader findingBlock={findingBlock} blocks={blocks}/>
      <MainBox blocks={filteredBlocks.length > 0 ? filteredBlocks : blocks} content={text}/>
    </div>
  )
}

export default App
