import { ContrastIcon, PaletteIcon, SunDimIcon } from 'lucide-react'
import './style.css'
export const RangeSlider = (props) => {
  const { name } = props
  const currentIcon =
    name === 'color' ? (
      <PaletteIcon size={24} color="white" />
    ) : name === 'brightness' ? (
      <SunDimIcon size={24} color="white" />
    ) : (
      <ContrastIcon size={24} color="white" />
    )

  return (
    <div className="range-component">
      <label htmlFor="">{currentIcon}</label>
      <input type="range" name={name} id="" className={name} />
    </div>
  )
}
