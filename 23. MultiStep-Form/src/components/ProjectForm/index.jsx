export const ProjectForm = (props) => {
  const { prevForm } = props
  return (
    <div className="project-form">
      <div className="text-area">
        <label htmlFor="">Objetivos do projeto</label>
        <textarea
          name=""
          id=""
          placeholder="Descreva quais os objetivos desse projeto"
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
