import './style.css'
export const RangeSlider = (props) => {
  const { name, setValue, icon } = props
  return (
    <div className="range-component">
      <label htmlFor="">{icon}</label>
      <input
        type="range"
        name={name}
        id=""
        className={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
