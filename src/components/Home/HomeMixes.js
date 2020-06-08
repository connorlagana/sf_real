import React from "react";
import share from "../../icons/share.png";
import play from "../../icons/play.png";
import pause from "../../icons/pause.png";

const HomeMixes = (props) => {
  return (
    <div className="HomeMixes">
      {props.songs.map((song) => (
        <div className="song">
          <div className="leftSong">
            <div id="square" className={song.color} />
            <div id="songName">{song.name}</div>
          </div>
          <div>
            <img src={share} />
            <div>
              {song.min}:{song.sec}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMixes;
