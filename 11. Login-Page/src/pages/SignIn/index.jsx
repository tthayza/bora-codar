import logo from "../../assets/logo.svg"
import "./styles.css"

function SignIn() {
  return (
    <div className="sign-in">
      <div className="title">
        <img src={logo} alt="logo em espiral" />
        <h1> Vertigo</h1>
      </div>
      <div className="text">
        <h1>Acesse a plataforma</h1>
        <p> Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
      </div>
      <div className="entry-box">
        <div className="entry">
          <p>E-mail</p>
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <div className="entry">
          <div className="password"> <p>Senha</p> <p>Esqueceu sua senha?</p></div>
          <input type="text" placeholder="Digite sua senha" />
        </div>
      </div>
      <button className="btn">Entrar</button>
      <div className="footer">
        <p> Ainda não tem uma conta?</p>
        <span> Inscreva-se </span>
      </div>
    </div>

  )
}
export default SignIn