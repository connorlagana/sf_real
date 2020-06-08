import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";
import HomeFront from "./HomeFront.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      songs: [
        {
          name: "Con's Mix Vol 1",
          color: "grad1",
          min: 58,
          sec: 24,
          isPlaying: false,
        },
        {
          name: "I am con mix",
          color: "grad2",
          min: 29,
          sec: 56,
          isPlaying: true,
        },
        {
          name: "Other Mix",
          color: "grad3",
          min: 59,
          sec: 51,
          isPlaying: false,
        },
        {
          name: "Funeral Mix",
          color: "grad4",
          min: 10,
          sec: 51,
          isPlaying: false,
        },
        {
          name: "Here and Now Mix",
          color: "grad5",
          min: 56,
          sec: 51,
          isPlaying: false,
        },
        {
          name: "Fallout Mix",
          color: "grad6",
          min: 58,
          sec: 22,
          isPlaying: false,
        },
        {
          name: "Chain Mix",
          color: "grad7",
          min: 29,
          sec: 21,
          isPlaying: false,
        },
      ],
    };
  }
  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <HomeFront songs={this.state.songs} />
        <div> Hello World, This is the home page</div>
      </div>
    );
  }
}

export default Home;
