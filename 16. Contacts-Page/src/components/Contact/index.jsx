import React from 'react'
import './styles.css'

export const Contact = (props) => {
  const { contacts } = props
  return (
    <div className="contact">
      {contacts.map((contact, index) => (
        <div className="c" key={index}>
          <div key={index} className="image">
            <img
              width="48px"
              height="48px"
              src={contact.image}
              alt="foto de uma mulher"
            />
          </div>
          <div className="contact-infos">
            <h2 key={index}>{contact.nome}</h2>
            <p key={index}>{contact.number}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
