import React, { Component } from "react";
import "./App.scss";

import { registerUser, loginUser, verifyUser } from "./services/api_helper";
import { Redirect } from "react-router-dom";

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
        <div>
          <div>Hello World</div>
        </div>
      );
    }
    return (
      <>
        <Redirect to="/home" />
        <div>Hello World2</div>
      </>
    );
  }
}

export default App;
