import React from 'react'
import './styles.css'

export const Contact = (props) => {
  const { contacts } = props

  return (
    <div className="contact">
      {contacts?.map((contact, index) => (
        <div className="c" key={index}>
          <div className="letters">
            {contact.hasInitial ? (
              <div className="letter" style={{ visibility: 'visible' }}>
                <h2> {contact.nome[0]} </h2>
              </div>
            ) : (
              <div className="letter" style={{ visibility: 'hidden' }}>
                <h2> {contact.nome[0]} </h2>
              </div>
            )}
          </div>
          <div className="informations">
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
        </div>
      ))}
    </div>
  )
}
