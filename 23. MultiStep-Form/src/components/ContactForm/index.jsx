import { Input } from '../Input'
import './style.css'
export const ContactForm = (props) => {
  const { nextForm } = props
  return (
    <div>
      <form>
        <Input
          name={'Nome'}
          text={'Como prefere ser chamado'}
          htmlFor={'name'}
          id={'name'}
        />
        <Input
          name={'Telefone'}
          text={'Digite seu número de WhatsApp'}
          htmlFor={'number'}
          id={'number'}
        />
        <Input
          name={'E-mail'}
          text={'Digite seu e-mail'}
          htmlFor={'email'}
          id={'email'}
        />
      </form>
      <footer className="contact-footer">
        <button onClick={nextForm} className="next">
          Continuar
        </button>
      </footer>
    </div>
  )
}
