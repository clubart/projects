import React, { Component } from 'react';
import './App.css';
import BlogDisplay from './BlogDisplay';

class App extends Component {
  state = {
    blogs: []
}

componentDidMount(){
  this.getBlogs();
}

getBlogs = () =>{
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
  render() {
    return (
      <div className="App">
        <BlogDisplay blogs={this.state.blogs}/>
      </div>
    );
  }

}

export default App;
