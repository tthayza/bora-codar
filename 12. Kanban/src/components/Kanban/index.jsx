import Header from "../Header"
import Task from "../Task"
import "./styles.css"

function Kanban() {
  return(
    <div className="kanban">
      <div className="top-content">
        <Header />
      </div>
      <div className="board">
        <div className="to-do tasks">
          <div className="title">
            <h3>A fazer</h3>
          </div>
          <div className="tasks-list">
            <Task
              title={"#boraCodar um Kanban 🧑‍💻"}
              description={"Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."}
              tag1={"rocketseat"}
              tag2={"desafio"}
              />
              <Task
              title={"Manter a ofensiva 🔥"}
              description={"Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva"}
              tag1={"rocketseat"}
              />
              <Task
              title={"Almoçar 🥗"}
              description={"Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço"}
              tag1={"autocuidado"}
              />
          </div>
        </div>
        <div className="doing tasks">
          <div className="title">
            <h3>Fazendo</h3>
          </div>
          <div className="tasks-list">
            <Task
              title={"Conferir o novo desafio 🚀 "}
              description={"Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível"}
              tag1={"rocketseat"}
              tag2={"desafio"}
              />
            <Task
              title={"Ser incrível 😎 "}
              description={"Sempre me lembrar de manter minha autenticidade e espalhar amor"}
              tag1={"autocuidado"}
              />

          </div>
        </div>
        <div className="done tasks">
          <div className="title">
            <h3>Feito</h3>
          </div>
          <div className="tasks-list">
            <Task
                title={"#boraCodar uma página de login 🧑‍💻"}
                description={"Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de login"}
                tag1={"rocketseat"}
                tag2={"desafio"}
                />
            <Task
                title={"#boraCodar uma página de clima 🧑‍💻"}
                description={"Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de clima"}
                tag1={"rocketseat"}
                tag2={"desafio"}
                />
            <Task
                title={"#boraCodar um conversor 🧑‍💻"}
                description={"Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um conversor de moedas."}
                tag1={"rocketseat"}
                tag2={"desafio"}
                />

          </div>
        </div>
      </div>
    </div>
  )
}
export default Kanban