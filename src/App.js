import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Users from './Users/Users';
import User from './User/User';

class App extends Component {
    state = {
        curUser: null,
    };
  render() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/:id" component={User} curUser={this.state.curUser}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
