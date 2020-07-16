import React, { Component } from "react";
import HomeHeader from "./HomeHeader.js";
import HomeFront from "./HomeFront.js";
import SoloMix from "../SoloMix/SoloMix.js";
import { Route } from "react-router-dom";
import { postDetails } from "../../services/api_helper.js";

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

    console.log(resp.data);
    this.setState({
      songs: resp.data,
    });
  };
  render() {
    return (
      <div className="Home">
        <HomeHeader currentUser={this.state.currentUser} />
        <HomeFront
          songs={this.state.songs}
          handleSoloClick={this.handleSoloClick}
        />
        {/* <div> Hello World, This is the home page</div> */}
        <SoloMix />
      </div>
    );
  }
}

export default Home;
