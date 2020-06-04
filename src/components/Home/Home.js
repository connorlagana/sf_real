import React, { Component } from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo1 from "../../logos/logo1.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div> Hello World, This is the home page</div>
      </div>
    );
  }
}

export default Home;
