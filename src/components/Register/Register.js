import React, { Component } from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo1 from "../../logos/logo1.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Register">
        <div className="logos">
          <img id="circleLogo" src={circleLogo} />
          <img id="wordLogo" src={logo1} />
        </div>
        <form></form>
      </div>
    );
  }
}

export default Register;
