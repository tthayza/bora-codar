import './style.css'
export const ContactForm = (props) => {
  const { visibility, currentDisplayContact } = props
  return (
    <div className="contact-form" style={{ display: visibility }}>
      <form action="">
        <div className="input">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Como prefere ser chamado" />
        </div>
        <div className="input">
          <label htmlFor="number">Telefone</label>
          <input
            type="tel"
            name=""
            id="number"
            placeholder="Digite seu número de WhatsApp"
          />
        </div>
        <div className="input">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />
        </div>
      </form>
      <footer>
        <button onClick={currentDisplayContact}>Continuar</button>
      </footer>
    </div>
  )
}
