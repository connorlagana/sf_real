import React from "react";
import share from "../../icons/share.png";
import play from "../../icons/play.png";
import pause from "../../icons/pause.png";
import plus from "../../icons/plus.png";

import { Link } from "react-router-dom";

const HomeMixes = (props) => {
  return (
    <div className="HomeMixes">
      {props.songs.map((song) => (
        <div className="song">
          <div className="leftSong">
            <div id="square" className={song.color} />
            <div id="songName">{song.name}</div>
          </div>
          <div className="rightSong">
            <img src={share} id="share" />
            <div>
              {song.min}:{song.sec}
            </div>
            <img src={play} id="play" />
          </div>
        </div>
      ))}

      <div className="song">
        <Link to="/new">
          <div className="leftSong">
            <div id="square" className="add">
              <img src={plus} id="plus" />
            </div>
            <div id="songName">Create New Mix</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeMixes;
