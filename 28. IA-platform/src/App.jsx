import {
  Code,
  ImageSquare,
  MusicNotesSimple,
  PlayCircle
} from '@phosphor-icons/react'
import Header from './components/Header'
import Option from './components/Option'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="main">
          <Option
            icon={<Code color="#94a3b8" size={40} />}
            action="Gerador de códigos"
          />
          <Option
            icon={<ImageSquare color="#94a3b8" size={40} />}
            action="Edição de foto"
          />
          <Option
            icon={<PlayCircle color="#94a3b8" size={40} />}
            action="Geração de vídeos"
          />

          <Option
            icon={<MusicNotesSimple color="#94a3b8" size={40} />}
            action="Criador de áudios e musicas "
          />
        </main>
      </div>
    </div>
  )
}

export default App
