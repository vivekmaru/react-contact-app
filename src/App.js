import React, { Component } from 'react';
import ContactApp from './components/ContactsApp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }
  
  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=10')
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail
      }
    )))
    .then(contacts => this.setState({contacts}));
  }
  
  render() {
    return (
      <div className="App">
        <ContactApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
