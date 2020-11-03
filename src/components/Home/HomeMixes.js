import React from "react";
import plus from "../../icons/plus.png";
import ReactAudioPlayer from "react-audio-player";
import mix1 from "../../mixes/Mix1.mp3";
import mix2 from "../../mixes/Mix2.mp3";
import mix3 from "../../mixes/Mix3.mp3";
import mix4 from "../../mixes/Mix4.mp3";
import mix5 from "../../mixes/Mix5.mp3";
import mix6 from "../../mixes/Mix6.mp3";
import mix7 from "../../mixes/Mix7.mp3";
import mix8 from "../../mixes/Mix8.mp3";
import mix9 from "../../mixes/Mix9.mp3";
import mix10 from "../../mixes/Mix10.mp3";
import mix11 from "../../mixes/Mix11.mp3";
import mix12 from "../../mixes/Mix12.mp3";
import mix13 from "../../mixes/Mix13.mp3";
import mix14 from "../../mixes/Mix14.mp3";
import mix15 from "../../mixes/Mix15.mp3";
import mix16 from "../../mixes/Mix16.mp3";
import mix17 from "../../mixes/Mix17.mp3";

import { Link } from "react-router-dom";
const mixes = [
  mix1,
  mix2,
  mix3,
  mix4,
  mix5,
  mix6,
  mix7,
  mix8,
  mix9,
  mix10,
  mix11,
  mix12,
  mix13,
  mix14,
  mix15,
  mix16,
  mix17,
];

const HomeMixes = (props) => {
  return (
    <div className="HomeMixes">
      {props.songs.map((song, songIdx) => (
        <div className="song" key={songIdx}>
          <div id="songName">{song.data.title}</div>
          <div id="square" className={song.data.grad} />
          <ReactAudioPlayer src={mixes[song.index]} controls />
        </div>
      ))}

      <div className="song">
        <Link to="/new">
          <div id="square" className="add">
            <img src={plus} id="plus" alt="" />
          </div>
          <div id="songName">Create New Mix</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeMixes;
