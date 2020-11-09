import React, { Component } from 'react';

export default class Book extends Component {


    render() {

        const { name, category, shelf } = this.props.book;

        return (
            <>
                <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{shelf}</td>
                </tr>
            </>
        );
    }
}