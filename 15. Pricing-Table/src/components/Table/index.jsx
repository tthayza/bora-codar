import React from 'react'

import './styles.css'

const Table = (props) => {
  const { title, name, price } = props

  const bgMiddle = name === 'Ultimate' ? '#2A0F22' : 'white'
  const typeBorder = name === 'Ultimate' ? 'none' : '0.1rem solid #e2e8f0'
  const colorTitle = name === 'Ultimate' ? '#FF6DB3' : '#ED3A70'
  const colorName = name === 'Ultimate' ? '#F8FAFC' : '#3B1E2F'
  const bgButton = name === 'Ultimate' ? '#FF6DB3' : 'none'
  const borderButton = name === 'Ultimate' ? 'none' : '0.1rem solid #3B1E2F'
  const colorButton = name === 'Ultimate' ? 'white' : '#3B1E2F'
  const dividerBorder =
    name == 'Ultimate' ? '.1rem solid #4E3355' : '.1rem solid #E2E8F0'
  const textPrice = name === 'Enterprise' ? '' : 'R$'
  console.log(title)
  return (
    <div
      className="plan"
      style={{ backgroundColor: bgMiddle, border: { typeBorder } }}
    >
      <div className="title">
        <h3 style={{ color: colorTitle }}>{title}</h3>
      </div>
      <div className="informations-plan">
        <h1 style={{ color: colorName }}>{name}</h1>
        <h2 style={{ color: colorName }}>
          {textPrice}
          <span style={{ color: colorName }}> {price}</span>
        </h2>
      </div>
      <button
        style={{
          background: bgButton,
          border: borderButton,
          color: colorButton
        }}
      >
        Assinar agora
      </button>
      <div className="divider" style={{ border: dividerBorder }}></div>
    </div>
  )
}

export default Table
