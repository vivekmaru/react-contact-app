import React, { Component } from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
        return(
            <ul>
                {contacts.map(contact => {
                    return <Contact name={contact.name} email={contact.email} thumbnail={contact.thumbnail}/>;
                })}
            </ul>
        );
}


export default ContactList;