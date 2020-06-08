import React from "react";

const HomeFront = (props) => {
  return (
    <div className="HomeFront">
      {props.songs.map((song) => (
        <div className="song">
          <div className="leftSong">
            <div id="square" className={song.color} />
            <div id="songName">{song.name}</div>
          </div>
          <div>{song.color}</div>
        </div>
      ))}
      <div>me</div>
    </div>
  );
};

export default HomeFront;
