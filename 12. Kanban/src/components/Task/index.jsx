import React from 'react'
import './styles.css'

function Task(props) {
  const { title, description, tag1, tag2 } = props

  return (
    <div className="task">
      <div className="task-title">{title}</div>
      <div className="description">{description}</div>
      <div className="tags">
        <div className="tag">{tag1}</div>
        {tag2 && <div className="tag">{tag2}</div>}
      </div>
    </div>
  )
}
export default Task
