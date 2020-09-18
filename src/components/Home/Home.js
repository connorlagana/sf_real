import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";
import HomeFront from "./HomeFront.js";
// import SoloMix from "../SoloMix/SoloMix.js";
// import { Route } from "react-router-dom";
import { postDetails } from "../../services/api_helper.js";
import axios from "axios";

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

    await this.setState({
      songs: resp.data,
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
