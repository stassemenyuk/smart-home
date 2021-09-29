import './App.css';
import LoginPage from '../login-page/LoginPage';
import React, { Component } from 'react';
import MainPage from '../main-page/MainPage';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      username: '',
    };
    this.autenficateUser = this.autenficateUser.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  autenficateUser(username) {
    this.setState({ isAuthenticated: true, username });
  }

  logOut() {
    this.setState({ isAuthenticated: false, username: '' });
  }

  render() {
    console.log(this.state.isAuthenticated);
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.isAuthenticated ? (
                <LoginPage autenficate={this.autenficateUser} />
              ) : (
                <Redirect to="/main" />
              )
            }
          />
          <Route
            path="/main"
            exact
            render={() =>
              !this.state.isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <MainPage logOut={this.logOut} username={this.state.username} />
              )
            }></Route>
        </Router>
      </div>
    );
  }
}
