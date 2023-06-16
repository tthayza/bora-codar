import './style.css'
export const Input = (props) => {
  const { name, text, htmlFor, id, type } = props

  return (
    <div className="input">
      <label htmlFor={htmlFor}>{name}</label>
      <input
        type={type}
        id={id}
        placeholder={text}
        style={{ color: '#323238' }}
        required
      />
    </div>
  )
}
