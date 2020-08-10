import React from "react";
import circleLogo from "../../logos/circleLogo.png";
import logo2 from "../../logos/logo2.png";
import { Link } from "react-router-dom";

const HomeHeader = (props) => {
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
        {/* <ul>
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/friends" className="link">
              Friends
            </Link>
          </li>
          <li>
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/profile" className="link">
              {props.currentUser.username}
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default HomeHeader;
