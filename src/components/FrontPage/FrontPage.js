import React, { Component } from "react";
import logo2 from "../../logos/logo2.png";
import circleLogo from "../../logos/circleLogo.png";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FrontPage">
        <div className="navBar">
          <div className="leftNav">
            <div className="logoDiv">
              <img id="circleLogo" src={circleLogo} />
              <img id="wordLogo" src={logo2} />
            </div>
            <br></br>
          </div>
          <ul className="rightNav">
            <li>
              <Link to="/service" className="link">
                Premium
              </Link>
            </li>
            <li>
              <Link to="/service" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="link">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/service" className="link">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FrontPage;
