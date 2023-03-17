import "./styles.css"
function SignIn() {
  return (
    <div className="sign-in">
      <div className="entry-box">
        <div className="entry">
          <label for="email">E-mail</label>
          <input type="text" placeholder="Digite seu e-mail" id="email"/>
        </div>
        <div className="entry">
          <div className="password">
            <label htmlFor="password">Senha</label>
            <a href="/new-password">
              <p>Esqueceu sua senha?</p>
            </a>
          </div>
          <input type="text" placeholder="Digite sua senha" id="password" />
        </div>
      </div>
      <button className="btn">Entrar</button>
      <div className="footer">
        <p> Ainda não tem uma conta?</p>
        <a href="sign-up"> Inscreva-se </a>
      </div>
    </div>

  )
}
export default SignIn