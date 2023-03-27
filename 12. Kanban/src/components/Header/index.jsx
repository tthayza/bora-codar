import filter from "../../assets/filter.svg"
import search from "../../assets/search.svg"
import kanban from "../../assets/kanban.png"
import profile from "../../assets/profile-picture.png"
import "./styles.css"

function Header() {
  return(
    <div className="header">
      <div className="title">
        <div className="text-content">
          <h1>Meu Kanban</h1>
          <img src={kanban} alt="" />
        </div>
        <div className="profile-picture">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="search-filter">
        <div className="btn-filter">
          <button>
            <img src={filter} alt="ícone de três linhas que diminuem de cima para baixo" />
            Filtrar
          </button>
        </div>
        <div className="search">
          <div  className="icon-search">
            <img src={search} alt=""  />
          </div>
          <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..."/>
        </div>
      </div>
    </div>
  )
}
export default Header