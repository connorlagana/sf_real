import React, { Component } from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo1 from "../../logos/logo1.png";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log("okayyy", this.state);
  };

  loginUser = (e) => {
    console.log("they match");
    this.props.handleLogin(e, {
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="logos">
          <img id="circleLogo" src={circleLogo} alt="" />
          <img id="wordLogo" src={logo1} alt="" />
        </div>
        <form>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter your email"
            // onfocus="this.select()"
            required
          />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Create a password"
            required
          />
          <button className="buttonfx curtainup" onClick={this.loginUser}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
