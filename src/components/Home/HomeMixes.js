import React from "react";
import share from "../../icons/share.png";
import play from "../../icons/play.png";
// import pause from "../../icons/pause.png";
import plus from "../../icons/plus.png";
import ReactAudioPlayer from "react-audio-player";
import mix1 from "../../mixes/Mix1.mp3";
import mix2 from "../../mixes/Mix2.mp3";
import mix3 from "../../mixes/Mix3.mp3";
import mix4 from "../../mixes/Mix4.mp3";

import { Link } from "react-router-dom";
const mixes = [mix1, mix2, mix3, mix4];

// const songUrl = "https://media.vocaroo.com/mp3/1ohtk7IZgs5";

const HomeMixes = (props) => {
  return (
    <div className="HomeMixes">
      {props.songs.map((song) => (
        // <Link to="/yourmix">
        <div className="song">
          <div className="leftSong">
            <div id="square" className="grad4" />
            <div id="songName">{song.title}</div>
            <ReactAudioPlayer src={mixes[song.mix]} controls />
          </div>
          <div className="rightSong">
            <img src={share} id="share" alt="" />
            <div>
              {song.min}:{song.sec}
            </div>
            <img src={play} id="play" alt="" />
          </div>
        </div>
        // </Link>
      ))}

      <div className="song">
        <Link to="/new">
          <div className="leftSong">
            <div id="square" className="add">
              <img src={plus} id="plus" alt="" />
            </div>
            <div id="songName">Create New Mix</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeMixes;
