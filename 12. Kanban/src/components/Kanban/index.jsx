import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Task from '../Task'
import './styles.css'

function Kanban() {
  const [filteredTasks, setFilteredTasks] = useState([])
  const [tasks] = useState([
    {
      status: 'to-do',
      title: '#boraCodar um Kanban 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
      tag1: 'rocketseat',
      tag2: 'desafio'
    },
    {
      status: 'to-do',
      title: 'Manter a ofensiva 🔥',
      description:
        'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
      tag1: 'rocketseat'
    },
    {
      status: 'to-do',
      title: 'Almoçar 🥗',
      description:
        'Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço',
      tag1: 'autocuidado'
    },
    {
      status: 'doing',
      title: 'Conferir o novo desafio 🚀 ',
      description:
        'Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível',
      tag1: 'rocketseat',
      tag2: 'desafio'
    },
    {
      status: 'doing',
      title: 'Ser incrível 😎 ',
      description:
        'Sempre me lembrar de manter minha autenticidade e espalhar amor',
      tag1: 'autocuidado'
    },
    {
      status: 'done',
      title: '#boraCodar uma página de login 🧑‍💻 ',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de login',
      tag1: 'rocketseat',
      tag2: 'desafio'
    },
    {
      status: 'done',
      title: '#boraCodar uma página de clima 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de clima',
      tag1: 'rocketseat',
      tag2: 'desafio'
    },
    {
      status: 'done',
      title: '#boraCodar um conversor 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um conversor de moedas.',
      tag1: 'rocketseat',
      tag2: 'desafio'
    }
  ])
  const findTask = valueSearch => {
    const currentTasks = tasks.filter(
      task =>
        task.title.toLowerCase().includes(valueSearch.toLowerCase()) ||
        task.description.toLowerCase().includes(valueSearch.toLowerCase()) ||
        task.tag1.toLowerCase().includes(valueSearch.toLowerCase()) ||
        task.tag2?.toLowerCase().includes(valueSearch.toLowerCase())
    )

    setFilteredTasks(currentTasks)
  }

  const taskList = filteredTasks.length > 0 ? filteredTasks : tasks

  useEffect(() => {
    console.log(filteredTasks)
  }, [filteredTasks])

  return (
    <div className="kanban">
      <div className="top-content">
        <Header findTask={findTask} />
      </div>
      <div className="board">
        <div className="to-do tasks">
          <div className="title">
            <h3>A fazer</h3>
          </div>
          <div className="tasks-list">
            {taskList
              .filter(task => task.status === 'to-do')
              .map((task, index) => {
                return (
                  <Task
                    key={`${index}`}
                    title={task.title}
                    description={task.description}
                    tag1={task.tag1}
                    tag2={task.tag2}
                  />
                )
              })}
          </div>
        </div>
        <div className="doing tasks">
          <div className="title">
            <h3>Fazendo</h3>
          </div>
          <div className="tasks-list">
            {taskList
              .filter(task => task.status === 'doing')
              .map((task, index) => {
                return (
                  <Task
                    key={`${index}`}
                    title={task.title}
                    description={task.description}
                    tag1={task.tag1}
                    tag2={task.tag2}
                  />
                )
              })}
          </div>
        </div>
        <div className="done tasks">
          <div className="title">
            <h3>Feito</h3>
          </div>
          <div className="tasks-list">
            {taskList
              .filter(task => task.status === 'done')
              .map((task, index) => {
                return (
                  <Task
                    key={`${index}`}
                    title={task.title}
                    description={task.description}
                    tag1={task.tag1}
                    tag2={task.tag2}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Kanban
