import React, { Component } from 'react';

export default class BlogDisplay extends Component {
    render() {

        return (
            <ul >
                {this.props.blogs.map((blog, index) => <li key={index}>
                    <div>{blog.name}</div>
                    <div>{blog.website}</div>
                    <div>{blog.companyName}</div>
                    <div>{blog.catchPhrase}</div>
                    <div>{blog.bs}</div></li>)}
            </ul>
        );
    }
}