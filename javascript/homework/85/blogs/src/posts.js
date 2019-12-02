import React, { Component } from 'react';

export default class Posts extends Component{
    render(){
        return (
            <ul>
            {this.props.posts.map((post, index) => <li key={index}><div>{post.title}</div>
            {post.body}</li>)}
            </ul>
        );
    }
}