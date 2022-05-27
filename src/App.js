import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Login from './Login/Login.js'
const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div>
       
          <button >Create User</button>
          <p>Users list:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user._id}>id: {user._id}</li>
            ))}
          </ul>
          <Login/>
        
      </div>
    );
  }
}

export default App;
