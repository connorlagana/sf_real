import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      songs: [],
    };
  }
  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <div> Hello World, This is the home page</div>
      </div>
    );
  }
}

export default Home;
