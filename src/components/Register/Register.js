import React, { Component } from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo1 from "../../logos/logo1.png";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailConfirm: "",
      username: "",
      password: "",
      disable: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  registerUser = (e) => {
    if (this.state.email === this.state.emailConfirm) {
      console.log("they match");
      this.setState({
        disable: "disable",
      });
      this.props.handleRegister(e, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      console.log("they don't match");
    }
  };

  render() {
    return (
      <div className="Register">
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
            type="text"
            name="emailConfirm"
            value={this.state.emailConfirm}
            onChange={this.handleChange}
            placeholder="Confirm your email"
            // onfocus="this.select()"
            required
          />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Enter a username"
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
          <button
            className="buttonfx curtainup"
            id={this.state.disable}
            onClick={this.registerUser}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
