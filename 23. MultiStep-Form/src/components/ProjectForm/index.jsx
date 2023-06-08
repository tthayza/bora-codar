export const ProjectForm = (props) => {
  const { visibility, currentDisplayProject } = props
  return (
    <div className="project-form" style={{ display: visibility }}>
      <h1>ProjectForm</h1>
      <button onClick={currentDisplayProject}>Enviar</button>
    </div>
  )
}
