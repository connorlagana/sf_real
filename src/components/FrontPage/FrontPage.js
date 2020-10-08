import React, { Component } from "react";
import MainFront from "./MainFront.js";

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="FrontPage">
        <MainFront />
      </div>
    );
  }
}

export default FrontPage;
