import React, { Component } from "react";
import NavBar from "./NavBar.js";
import MainFront from "./MainFront.js";
import FrontFooter from "./FrontFooter.js";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FrontPage">
        <NavBar />
        <MainFront />
        <FrontFooter />
      </div>
    );
  }
}

export default FrontPage;
