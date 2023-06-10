import { Input } from '../Input'
import './style.css'
export const CompanyForm = (props) => {
  const { nextForm, prevForm } = props
  return (
    <div className="company-form">
      <form action="">
        <Input
          name={'Nome da empresa'}
          text={'Qual é o nome da empresa'}
          htmlFor={'company-name'}
          id={'company-name'}
        />
        <Input
          name={'Número de funcionários'}
          text={'Digite o número de colaboradores'}
          htmlFor={'number-of-employees'}
          id={'number-of-employees'}
        />

        <div className="text-area">
          <label htmlFor="about">Sobre seu negócio</label>
          <textarea
            style={{ color: '#323238' }}
            name=""
            id="about"
            placeholder="Fale um pouco sobre seus produtos ou serviços"
          ></textarea>
        </div>
      </form>
      <footer>
        <button onClick={prevForm} className="back">
          Voltar
        </button>
        <button onClick={nextForm} className="next">
          Continuar
        </button>
      </footer>
    </div>
  )
}
