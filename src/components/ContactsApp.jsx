import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactApp.css';

class ContactApp extends Component {
    
    render() {
        return <ContactList contacts={this.props.contacts} />
    }
}

export default ContactApp;
