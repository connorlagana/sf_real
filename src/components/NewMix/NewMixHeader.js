import React from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import TitleNewMix from "./TitleNewMix.js";

const NewMixHeader = (props) => {
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
        <TitleNewMix handleTitleChange={props.handleTitleChange} />
      </div>
    </div>
  );
};

export default NewMixHeader;
