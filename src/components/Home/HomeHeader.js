import React from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo2 from "../../logos/logo2.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="leftHH">
        <div className="logoDiv">
          <img id="circleLogo" src={circleLogo} />
          <img id="wordLogo" src={logo2} />
        </div>
        <br />
      </div>
      <div className="rightHH">
        <ul>
          <li>
            <Link to="/premium" className="link">
              Premium
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
