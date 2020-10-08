import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";
import HomeFront from "./HomeFront.js";
// import SoloMix from "../SoloMix/SoloMix.js";
// import { Route } from "react-router-dom";
import { postDetails } from "../../services/api_helper.js";

class Home extends Component {
  state = {
    currentUser: this.props.currentUser,
    songs: [],
    alreadyHave: [],
  };

  componentDidMount() {
    console.log("the following is the state of home");
    console.log(this.state);

    this.fetchUsersMixes();
  }

  handleSoloClick = () => {
    console.log("handling solo");
  };

  fetchUsersMixes = async () => {
    console.log("fetching user mixes");
    const userid = this.state.currentUser.id;
    const resp = await postDetails(userid);

    console.log(`current user id: ${userid}`);
    console.log(`current resp Post Details:`, resp.data);

    const anal = resp.data;

    const newMixes = [];
    const titles = [];
    for (let i = 0; i < anal.length; i++) {
      const str = anal[i].mix;
      const num = str.substring(3);
      const inInd = parseInt(num) - 1;

      const tit = anal[i].mix;
      titles.push(tit);

      const obj = {
        data: anal[i],
        index: inInd,
      };
      newMixes.push(obj);

      console.log(titles);
    }

    await this.setState({
      songs: newMixes,
      alreadyHave: titles,
    });

    console.log("the songs are:", this.state.songs);
  };

  render() {
    return (
      <div className="Home">
        <HomeHeader
          currentUser={this.state.currentUser}
          handleLogout={this.props.handleLogout}
        />
        <HomeFront
          songs={this.state.songs}
          handleSoloClick={this.handleSoloClick}
        />
      </div>
    );
  }
}

export default Home;
