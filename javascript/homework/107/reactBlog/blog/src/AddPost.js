import React, { Component } from 'react';

export default class AddPost extends Component {

  state = {
    title: '',
    content: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content
        })
      });
      this.setState({
        title: '',
        content: ''
      });
      if (!resp.ok) {
        return console.error(resp.statusText);
      }
      this.complete();


    } catch (e) {
      console.error(e);
    }
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <label>Title:
    <input name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>Content:
    <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}