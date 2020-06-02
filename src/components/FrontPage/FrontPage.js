import React, { Component } from "react";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FrontPage">
        <div className="navbar">
          <div></div>
          <ul>
            <li>Premium</li>
            <li>About</li>
            <li>|</li>
            <li>Sign Up</li>
            <li>Log In</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FrontPage;
