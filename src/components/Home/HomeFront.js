import React from "react";
import HomeMixes from "./HomeMixes.js";

const HomeFront = (props) => {
  return (
    <div className="HomeFront">
      <div id="numMix">Mixes: {props.songs.length}</div>
      <HomeMixes songs={props.songs} handleSoloClick={props.handleSoloClick} />
    </div>
  );
};

export default HomeFront;
