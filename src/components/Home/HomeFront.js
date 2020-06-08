import React from "react";

const HomeFront = (props) => {
  return (
    <div className="HomeFront">
      {props.songs.map((song) => (
        <div className="song">
          <div id="artistTitle">{song.name}</div>
          <div>{song.color}</div>
        </div>
      ))}
      <div>me</div>
    </div>
  );
};

export default HomeFront;
