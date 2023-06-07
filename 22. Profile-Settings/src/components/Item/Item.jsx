import { ChevronRight } from 'lucide-react'
import './style.css'

export const Item = (props) => {
  const { name, icon } = props
  return (
    <div className="item flex">
      <div className="details flex">
        <div className="flex">{icon}</div>
        <p>{name}</p>
      </div>
      <div className="icon flex">
        <ChevronRight size={20} color="#38343D" />
      </div>
    </div>
  )
}
