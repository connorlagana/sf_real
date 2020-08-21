import React, { Component } from "react";
import "./App.scss";

import { registerUser } from "./services/api_helper";

import TypeList from "./components/TypeList";
import CreateMixButton from "./components/CreateMixButton";
import FrontPage from "./components/FrontPage/FrontPage.js";
import NavBar from "./components/FrontPage/NavBar.js";
import FrontFooter from "./components/FrontPage/FrontFooter.js";
import Home from "./components/Home/Home.js";
import { Route, Redirect, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import NewMix from "./components/NewMix/NewMix.js";
import About from "./components/About/About.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: false,
    };
  }

  createMix = async (e, musicData) => {
    e.preventDefault();

    let count = 0;
    let low = 10000;

    for (const el in this.state.mix) {
      count = this.state.mix[el].length;

      console.log(count);
      if (count < low) {
        low = count;
      }

      count = 0;
    }

    //This is the maximum amount of songs we can make from the users selection
    console.log("the lowest number is: " + low);

    // for (const el in this.state.mix) {
    // }

    // let audio = new Audio(songCreated);

    // audio.play();
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

  render() {
    if (this.state.currentUser === false) {
      return (
        <>
          <NavBar />
          <Redirect to="/about" />

          <Route exact path="/">
            <FrontPage />
          </Route>

          <Route path="/register">
            <Register handleRegister={this.handleRegister} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/login">
            <Register handleRegister={this.handleRegister} />
          </Route> */}
          <FrontFooter />
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
            render={() => <Home currentUser={this.state.currentUser} />}
          />
          <Route
            exact
            path="/new"
            render={() => <NewMix currentUser={this.state.currentUser} />}
          />
          <div id="title">Sound Flex</div>
          <TypeList types={this.state.types} />
          <CreateMixButton createMix={this.createMix} />
        </Switch>
      </>
    );
  }
}

export default App;
