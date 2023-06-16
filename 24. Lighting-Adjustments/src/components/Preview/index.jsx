import './style.css'
export const Preview = (props) => {
  const {
    currentColor,
    brightnessPercent,
    contrastPercent
    // brightnessOrContrast
  } = props

  return (
    <div
      style={{
        background: currentColor,
        boxShadow: `0px 0px 53px 13px ${currentColor}`,
        filter: `brightness(${brightnessPercent / 100}) contrast(${
          contrastPercent / 100
        })`
      }}
      className="preview"
    ></div>
  )
}
