import './style.css'
export const Input = (props) => {
  const { name, text, htmlFor, id } = props
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{name}</label>
      <input type="text" id={id} placeholder={text} />
    </div>
  )
}
