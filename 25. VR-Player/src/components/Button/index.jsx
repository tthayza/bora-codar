import './style.css'
export const Button = (props) => {
  const { content } = props

  return <button className="flex">{content}</button>
}
