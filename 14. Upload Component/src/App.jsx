import React from 'react'
import upload from './assets/upload.svg'
import File from './components/File'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="import-area">
          <img src={upload} alt="ícone de upload" />
          <h2>Importe seus arquivos</h2>
          <h3>Arraste ou clique para fazer upload</h3>
        </div>
        <div className="file-status">
          <File name="Scann_158.pdf" size="74 MB" />
          <File name="Scann_158.pdf" size="74 MB" />
          <File name="Scann_158.pdf" size="74 MB" />
          <File name="Scann_158.pdf" size="74 MB" />
          <File name="Scann_158.pdf" size="74 MB" />
          <File name="Scann_158.pdf" size="74 MB" />
        </div>
      </div>
    </div>
  )
}

export default App
