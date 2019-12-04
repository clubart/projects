import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Blog from './Blog';
import Error from './Error';

export default class App extends Component {
  state = {
    selectedBlog: null
  };

  handleBlogSelected = blog => {
    this.setState({
      selectedBlog: blog
    });
  };

  handleGoHome = () => {
    this.setState({
      selectedBlog: null
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <Header />
          <hr />
          <Switch>
            <Route path="/blogList/" render={() => <BlogList onBlogSelected={this.handleBlogSelected} />} />
            <Route path="/blog" render={() => <Blog blog={this.state.selectedBlog} />} />
            <Route path='*' exact={true} component={Error} />
            <Redirect to="/blogList/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


