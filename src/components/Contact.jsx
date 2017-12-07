import React from 'react'

const Contact = ({ name, email, thumbnail }) => (
    <li key={email}>
          <img src={thumbnail} role="presentation" />
          <div className="contactData">
            <strong>{name}</strong><br/><small>{email}</small>
          </div>
        </li>
    )

export default Contact;