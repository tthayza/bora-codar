import {
  Clapperboard,
  PersonStandingIcon,
  PlayCircle,
  SearchIcon
} from 'lucide-react'
import { Button } from '../Button'
import './style.css'
export const SideMenu = () => {
  return (
    <div className="side-menu flex bg-blur">
      <Button content={<PlayCircle size={17} />} />
      <Button content={<PersonStandingIcon size={17} />} />
      <Button content={<Clapperboard size={17} />} />
      <Button content={<SearchIcon size={17} />} />
    </div>
  )
}
