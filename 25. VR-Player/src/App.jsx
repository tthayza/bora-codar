import { Header } from './components/Header'
import { Player } from './components/Player'
import { SideMenu } from './components/SideMenu'

import './styles/global.css'
function App() {
  return (
    <div className="app flex">
      <div className="container">
        <aside className="flex">
          <SideMenu />
        </aside>
        <main>
          <Header />

          <Player />
        </main>
      </div>
    </div>
  )
}

export default App
