import React from "react";
import HomeMixes from "./HomeMixes.js";

const HomeFront = (props) => {
  return (
    <div className="HomeFront">
      <div id="numMix">Mixes: {props.songs.length}</div>
      <HomeMixes songs={props.songs} />
      <div>me</div>
    </div>
  );
};

export default HomeFront;
