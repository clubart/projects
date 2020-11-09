import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewLibrary from './NewLibrary';
import EnterLibrary from './EnterLibrary';
import MyLibrary from './MyLibrary';


class App extends Component {
  state = {
    library: {}
  }

  setLibrary = lib => {
    this.setState({
      library: lib
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/newLibrary' component={NewLibrary}></Route>
          <Route exact path='/enterLibrary' render={() => <EnterLibrary setLibrary={this.setLibrary} />} ></Route>
          {/* <Route exact path='/libraries/:id/books' library={this.state.library} component={MyLibrary}></Route>  */}
          <Route exact path='/libraries/:id/books' render={() => <MyLibrary library={this.state.library} />}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
