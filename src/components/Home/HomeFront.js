import React from "react";
import HomeMixes from "./HomeMixes.js";

const songs = [
  {
    title: "Connor1",
    mix: "3",
  },
];

const HomeFront = (props) => {
  return (
    <div className="HomeFront">
      <div id="numMix">Mixes: {props.songs.length}</div>
      <HomeMixes songs={songs} handleSoloClick={props.handleSoloClick} />
    </div>
  );
};

export default HomeFront;
