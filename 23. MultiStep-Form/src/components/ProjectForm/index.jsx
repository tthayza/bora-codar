export const ProjectForm = (props) => {
  const { prevForm } = props
  return (
    <div className="project-form">
      <div className="text-area">
        <label htmlFor="goals">Objetivos do projeto</label>
        <textarea
          style={{ color: '#323238' }}
          name=""
          id="goals"
          placeholder="Descreva quais os objetivos desse projeto"
          type={'text'}
        ></textarea>
      </div>
      <footer className="buttons">
        <button onClick={prevForm} className="back">
          Voltar
        </button>
        <button className="next">Enviar Proposta</button>
      </footer>
    </div>
  )
}
