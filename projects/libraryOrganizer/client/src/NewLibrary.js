import React, { Component } from 'react';

export default class NewLibrary extends Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const resp = await fetch(`http://localhost/libraries`, {
        method: 'POST',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.state.name, 
                                password: this.state.password, 
                                adminPassword: this.state.adminPassword })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }
      this.props.history.push('/');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <form id="addLibrary" onSubmit={this.handleSubmit}>
            <label>Name: <input name="name" onChange={this.handleInputChange}></input></label>
            <label>Password: <input name="password" type="password" onChange={this.handleInputChange}></input></label>
            <label>Admin Password: <input name="adminPassword" type="password" onChange={this.handleInputChange}></input></label>
            <button>Create Library</button>
        </form>
    );
  }
}