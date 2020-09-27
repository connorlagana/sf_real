import React, { Component } from "react";
import "./About.scss";
import WhatIs from "./WhatIs.js";

class About extends Component {
  state = {};

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
