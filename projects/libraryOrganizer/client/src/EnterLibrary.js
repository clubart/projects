import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//export default class EnterLibrary extends Component {
    class EnterLibrary extends Component {
    state = {}

    
    
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
            const resp = await fetch(`http://localhost/libraries`);

            if (!resp.ok) {
                return console.error(resp.statusText);
            }
            const libraries = await resp.json();
            const theLibrary = libraries.find(l => l.name === this.state.name);
            this.props.setLibrary(theLibrary);
            this.props.history.push(`/libraries/${theLibrary._id}/books`);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
                <form id="enterLibrary" onSubmit={this.handleSubmit}>
                    <label>Name: <input name="name" onChange={this.handleInputChange}></input></label>
                    <label>Password: <input name="password" type="password" onChange={this.handleInputChange}></input></label>
                    <button>Enter Library</button>
                </form>
            </>
        );
    }
}
export default withRouter(EnterLibrary)