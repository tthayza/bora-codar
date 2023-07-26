import './styles/global.css'
function App() {
  return (
    <div className="app">
      <h1>Antes e depois com imagem gerada por IA</h1>
      <p>Arraste o ícone abaixo para visualizar a imagem</p>
      <div className="container">
        <div className="pixelated-pic image"></div>
        <div className="slider"></div>
        <div className="pic image "></div>
      </div>
    </div>
  )
}

export default App
