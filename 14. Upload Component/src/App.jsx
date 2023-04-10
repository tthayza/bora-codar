import React, { useState } from 'react'
import upload from './assets/upload.svg'
import File from './components/File'

function App() {
  const [files, setFiles] = useState([{ name: 'novo.txt', size: '44 MB' }])
  const addNewFile = () => {
    // const newList = [
    //   { name: 'novoNovo.txt', size: '488 MB' },
    //   ...files
    // ].reverse()
    setFiles(prev =>
      [...prev, { name: 'novoNovo.txt', size: '488 MB' }].reverse()
    )
  }
  return (
    <div className="app">
      <div className="container">
        <div className="import-area" onClick={() => addNewFile()}>
          <img src={upload} alt="ícone de upload" />
          <h2>Importe seus arquivos</h2>
          <h3>Arraste ou clique para fazer upload</h3>
        </div>
        <div className="file-status">
          {files.map((file, index) => (
            <File key={index} name={file.name + index} size={file.size} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
