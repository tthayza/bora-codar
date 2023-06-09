import { Check, ChevronRight } from 'lucide-react'
import './style.css'

export const Header = (props) => {
  const { bgColor1, bgColor2, bgColor3, currentColor2, currentColor3 } = props
  const checkIcon = <Check size={20} color="white" />

  return (
    <header className="header">
      <div className="item">
        <p style={{ backgroundColor: bgColor1, color: '#FFFFFF' }}>
          {bgColor1 == '#1D8841' ? checkIcon : 1}
        </p>
        <h2>Contato</h2>
      </div>
      <div className="icon">
        <ChevronRight size={'20px'} color="#323238" />
      </div>
      <div className="item">
        <p style={{ backgroundColor: bgColor2, color: currentColor2 }}>
          {bgColor2 == '#1D8841' ? checkIcon : 2}
        </p>
        <h2>Empresa</h2>
      </div>
      <div className="icon">
        <ChevronRight size={'20px'} color="#323238" />
      </div>
      <div className="item">
        <p style={{ backgroundColor: bgColor3, color: currentColor3 }}>
          {bgColor3 == '#1D8841' ? checkIcon : 3}
        </p>
        <h2>Projeto</h2>
      </div>
    </header>
  )
}
