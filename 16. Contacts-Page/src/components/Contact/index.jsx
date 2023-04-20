import React from 'react'
import './styles.css'

export const Contact = () => {
  return (
    <div className="contact">
      <div className="image">
        <img
          width="48px"
          height="48px"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="foto de uma mulher"
        />
      </div>
      <div className="contact-infos">
        <h2>Amanda</h2>
        <p>(16) 9 9999-9999</p>
      </div>
    </div>
  )
}
