import React, { Component } from "react";
import "./App.scss";

import { registerUser, loginUser, verifyUser } from "./services/api_helper";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/Home/Home.js";
import NewMix from "./components/NewMix/NewMix.js";
import NavBar from "./components/FrontPage/NavBar.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: false,
    };
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();

    const currentUser = await loginUser(loginData);
    console.log("this is the current5 user", currentUser);
    this.setState({
      currentUser: currentUser,
    });
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser,
      });
    }
  };

  handleLogout = () => {
    this.setState({
      currentUser: false,
    });
    localStorage.removeItem("authToken");
  };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND password",
      });
    } else {
      const currentUser = await registerUser(registerData);
      console.log("from app.js");
      this.setState({
        currentUser: currentUser,
      });
    }
  };

  componentDidMount = () => {
    this.handleVerify();
  };

  render() {
    if (this.state.currentUser === false) {
      return (
        <>
          <Redirect to="/" />
          <NavBar />
        </>
      );
    }
    return (
      <>
        <Redirect to="/home" />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <Home
                currentUser={this.state.currentUser}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/new"
            render={() => <NewMix currentUser={this.state.currentUser} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
