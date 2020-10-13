import React from "react";

import logo2 from "../../logos/logo2.png";
import circleLogo from "../../logos/circleLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="leftNav">
        <li className="logoDiv">
          <Link to="/">
            <img id="circleLogo" src={circleLogo} alt="" />
            <img id="wordLogo" src={logo2} alt="" />
          </Link>
        </li>
        <br></br>
      </div>
      <div className="rightNav">
        <ul>
          {/* <li>
            <Link to="/premium" className="link">
              Premium
            </Link>
          </li> */}
          <li>
            {/* <Link to="/about" className="link">
              About
            </Link> */}
          </li>
          <li>
            <Link to="/register" className="link">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
