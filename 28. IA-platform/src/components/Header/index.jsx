import { MagicWand } from '@phosphor-icons/react'
import './style.css'
const Header = () => {
  return (
    <header>
      <div className="icon">
        <MagicWand color="#94a3b8" size={40} />
      </div>
      <h1>Experimente o poder da Inteligência Artificial</h1>
    </header>
  )
}

export default Header
