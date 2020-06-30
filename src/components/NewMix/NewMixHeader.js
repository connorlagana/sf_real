import React from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

const NewMixHeader = () => {
  return (
    <div className="fixedHeader">
      <div className="topFH">
        <Link to="/home">
          <KeyboardArrowLeft id="left" />
        </Link>
        <Link to="/home">
          <KeyboardArrowRight id="left" />
        </Link>
      </div>
      <div className="midFH">
        <label>Name of Mix: </label>
        <TextField placeholder="ConsMix 1" />
      </div>
    </div>
  );
};

export default NewMixHeader;
