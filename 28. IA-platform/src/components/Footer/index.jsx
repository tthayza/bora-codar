import { PaperPlaneRight, PlayCircle } from '@phosphor-icons/react'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="input-footer">
        <PlayCircle color="#94A3B8" size={32} />
        <p>Envie uma mensagem ou digite “/” para exibir os comandos </p>
      </div>
      <button>
        <PaperPlaneRight color="#F8FAFC" size={32} />
      </button>
    </footer>
  )
}

export default Footer
