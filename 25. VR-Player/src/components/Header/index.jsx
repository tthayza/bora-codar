import {
  CaseSensitive,
  ChevronLeft,
  ChevronRight,
  Copy,
  Lock,
  PanelLeft,
  Plus,
  RotateCw,
  Share
} from 'lucide-react'
import { Button } from '../Button'
import './style.css'
export const Header = () => {
  return (
    <div className="header flex bg-blur">
      <div className="actions flex">
        <Button content={<PanelLeft size={17} />} />
        <Button content={<ChevronLeft size={17} />} />
        <Button content={<ChevronRight size={17} />} />
      </div>
      <div className="input-area flex">
        <div className="btn">
          <Button content={<CaseSensitive size={19} />} />
        </div>
        <p className="flex">
          <Button content={<Lock size={17} />} />
          rocketseat.com
        </p>
        <div className="btn">
          <Button content={<RotateCw size={17} />} />
        </div>
      </div>
      <div className="actions flex">
        <Button content={<Share size={17} />} />
        <Button content={<Plus size={17} />} />
        <Button content={<Copy size={17} />} />
      </div>
    </div>
  )
}
