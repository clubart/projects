import React, { Component } from 'react';
import Book from './Book';
import EnterAdminMode from './EnterAdminMode';
import AddBook from './AddBook';

export default class MyLibrary extends Component {

  state = {
    showBooks: false,
    admin: false,
    addBook: false
  }

  componentDidMount = () => {
    this.setState({ showBooks: true });
  }

  getBook = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  EnterAdminMode = () => {
    this.setState({ setAdmin: true });
  }

  leaveAdminMode = () => {
    this.setState({ setAdmin: false });
  }

  admin = () => {
    this.setState({ admin: true });
  }

  leaveAddBook = () => {
    this.setState({ addBook: false });
  }

  render() {

    const { books } = this.props.library;

    const getBooks = this.state.theBook ?
      books.filter(b => b.name === this.state.theBook) :
      books;

    const myBooks = this.state.showBooks ?
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Shelf</th>
          </tr>
        </thead>
        <tbody>
          {getBooks.map(b => <Book key={b.name} book={b} />)}
        </tbody>
      </table>
      : null;

    const adminButton = this.state.admin ? <button onClick={() => this.setState({ admin: false })}>User</button>
      : <button onClick={this.EnterAdminMode}>Admin</button>;

    const enterAdminMode = this.state.setAdmin ?
      <EnterAdminMode adminPassword={this.props.library.adminPassword} admin={this.admin} leaveAdminMode={this.leaveAdminMode} />
       : null

    const addBookButton = this.state.admin ? <button onClick={() => this.setState({ addBook: true })}>Add Book</button> : null;

  const addBook = this.state.addBook ? < AddBook library={this.props.library._id} leaveAddBook={this.leaveAddBook}/> : null
    return (
      <>
        <label>Search: <input name="theBook" onChange={this.getBook}></input></label>
        {adminButton}
        {addBookButton}
        {myBooks}
        {enterAdminMode}
        {addBook}
      </>
    );
  }
}