import React from 'react'
import cancel from '../../assets/cancel.svg'
import file from '../../assets/uploaded-file.svg'
import './styles.css'

function File(props) {
  const { name, size } = props
  return (
    <div className="file">
      <div className="image">
        <img src={file} alt="" />
      </div>
      <div className="infos">
        <div className="top">
          <div className="info">
            <h2 className="name"> {name}</h2>
            <h3 className="size">{size}</h3>
          </div>
          <div className="icon">
            <img src={cancel} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="progress-bar">
            <div className="bar"> </div>
            <div className="progress"></div>
            <div className="current-status">44%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default File
