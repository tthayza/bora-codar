import './style.css'
export const RangeSlider = (props) => {
  const { name, setValue, icon, maxValue } = props
  return (
    <div className="range-component">
      <label htmlFor="">{icon}</label>
      <input
        type="range"
        name={name}
        id=""
        className={name}
        onChange={(e) => setValue(e.target.value)}
        max={maxValue}
        defaultValue={name === 'color' ? maxValue / 2 : 50}
      />
    </div>
  )
}
