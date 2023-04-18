import React, { useState } from 'react'
import check from '../../assets/check.svg'
import info from '../../assets/info.svg'

import './styles.css'

const Table = (props) => {
  const { title, name, price, benefits } = props
  const bgMiddle = name === 'Ultimate' ? '#2A0F22' : 'white'
  const typeBorder = name === 'Ultimate' ? 'none' : '0.1rem solid #e2e8f0'
  const colorTitle = name === 'Ultimate' ? '#FF6DB3' : '#ED3A70'
  const colorName = name === 'Ultimate' ? '#F8FAFC' : '#3B1E2F'
  const bgButton = name === 'Ultimate' ? '#FF6DB3' : 'white'
  const borderButton = name === 'Ultimate' ? 'none' : '0.1rem solid #3B1E2F'
  const colorButton = name === 'Ultimate' ? 'white' : '#3B1E2F'
  const dividerBorder =
    name == 'Ultimate' ? '.1rem solid #4E3355' : '.1rem solid #E2E8F0'
  const textPrice = name === 'Enterprise' ? '' : 'R$'
  const colorList = name === 'Ultimate' ? '#CBD5E1' : '#475569'
  const currentVisibility = name === 'Ultimate' ? 'visible' : 'hidden'
  const typeBtn = name === 'Ultimate' ? 'btn-ultimate' : 'btn-plan'
  const benefitsList = benefits
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true)

  const handleMouseLeave = () => setHover(false)

  return (
    <div
      className={`plan ${hover ? `escala-hover` : ''} `}
      style={{ backgroundColor: bgMiddle, border: { typeBorder } }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <h3 className="advantageous" style={{ visibility: currentVisibility }}>
        Mais Vantajoso
      </h3>
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
        className={typeBtn}
        style={{
          background: bgButton,
          border: borderButton,
          color: colorButton
        }}
      >
        Assinar agora
      </button>
      <div className="divider" style={{ border: dividerBorder }}></div>
      <div className="benefits-list">
        {benefitsList.map((item, index) => (
          <div key={index} className="benefits">
            <div className="benefit-info">
              <img src={check} alt="" />
              <h3
                className="benefit-text"
                style={{ color: colorList }}
                key={index}
              >
                {' '}
                {item}{' '}
              </h3>
            </div>
            <div className="img-info">
              <img src={info} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
