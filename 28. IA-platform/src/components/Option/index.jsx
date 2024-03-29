import { ArrowRight } from '@phosphor-icons/react'
import './style.css'
const Option = (props) => {
  const { icon, action } = props
  return (
    <div className="option">
      <div className="icon-infos">
        <div className="icon option-i">{icon}</div>
        <p>{action}</p>
      </div>
      <div className="arrow icon">
        <ArrowRight color="#94a3b8" size={32} />
      </div>
    </div>
  )
}

export default Option
