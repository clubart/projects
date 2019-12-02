import React, { Component } from 'react';

export default class Blogs extends Component {
    constructor(){
        super();
        this.getBlogs();
    }
    state = {
        blogs: []
    }

    getBlogs(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load blog list');
            }
            return response.json();
        })
        .then (blogs => {
            console.log(blogs);
            const blogsArray = blogs.map(blog =>{
                return {
                    id: blog.id,
                    name: blog.name,
                    website: blog.website,
                    companyName: blog.company.name,
                    catchPhrase: blog.company.catchPhrase,
                    bs: blog.company.bs
                }
            });
            this.setState({
                blogs: blogsArray
            });
        })
    }

    handleBlogClick =  (blog) =>{
        console.log(blog);
        this.setState({
            selected: blog
        })
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load blog list');
            }
            return response.json();
        })
        .then(posts =>{
            console.log(posts);
            const postsArray = posts.forEach(post => {
                return {
                    title: post.title,
                    body: post.body
                }
            });
            this.setState({
                posts: postsArray
            });
        })
    }
    render(){
        return(
            <ul>
                {this.state.blogs.map((blog,index)=><li onClick={()=>this.handleBlogClick(blog)} key={index}><div>{blog.name}</div>
                                                                    <div>{blog.website}</div>
                                                                    <div>{blog.companyName}</div>
                                                                    <div>{blog.catchPhrase}</div>
                                                                    <div>{blog.bs}</div></li>)}
            </ul>
            );
    }
}