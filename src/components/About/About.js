import React, { Component } from "react";
import "./About.scss";
import WhatIs from "./WhatIs.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <div>About</div>
        <WhatIs />
      </div>
    );
  }
}

export default About;
