import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";
import HomeFront from "./HomeFront.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      songs: [],
    };
  }

  componentDidMount() {
    console.log("the following is the state of home");
    console.log(this.state);
  }
  render() {
    return (
      <div className="Home">
        <HomeHeader currentUser={this.state.currentUser} />
        <HomeFront songs={this.state.songs} />
        <div> Hello World, This is the home page</div>
      </div>
    );
  }
}

export default Home;
