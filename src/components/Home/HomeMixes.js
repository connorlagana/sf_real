import React from "react";
import share from "../../icons/share.png";
import play from "../../icons/play.png";
// import pause from "../../icons/pause.png";
import plus from "../../icons/plus.png";
// import ReactAudioPlayer from "react-audio-player";
// import mix1 from "../../mixes/Mix1.mp3";
// import mix2 from "../../mixes/Mix2.mp3";
// import mix3 from "../../mixes/Mix3.mp3";
// import mix4 from "../../mixes/Mix4.mp3";

import { Link } from "react-router-dom";
// const mixes = [mix1, mix2, mix3, mix4];

// const songUrl = "https://media.vocaroo.com/mp3/1ohtk7IZgs5";

const mixes = [
  {
    id: 1,
    title: "",
    mix: "mix1",
    createdAt: "2020-09-07T16:36:16.791Z",
    updatedAt: "2020-09-07T16:36:16.791Z",
    userId: "1",
  },
  {
    id: 2,
    title: "",
    mix: "mix1",
    createdAt: "2020-09-07T18:46:01.250Z",
    updatedAt: "2020-09-07T18:46:01.250Z",
    userId: "2",
  },
  {
    id: 3,
    title: "dick bangers vol 3",
    mix: "mix1",
    createdAt: "2020-09-07T18:47:14.412Z",
    updatedAt: "2020-09-07T18:47:14.412Z",
    userId: "2",
  },
  {
    id: 4,
    title: "Fuckme",
    mix: "mix1",
    createdAt: "2020-09-07T18:50:56.098Z",
    updatedAt: "2020-09-07T18:50:56.098Z",
    userId: "3",
  },
  {
    id: 5,
    title: "Swag Daddy's Pump Jam",
    mix: "mix1",
    createdAt: "2020-09-07T19:23:10.284Z",
    updatedAt: "2020-09-07T19:23:10.284Z",
    userId: "10",
  },
  {
    id: 6,
    title: "",
    mix: "mix1",
    createdAt: "2020-09-09T19:22:15.368Z",
    updatedAt: "2020-09-09T19:22:15.368Z",
    userId: "11",
  },
  {
    id: 7,
    title: "",
    mix: "mix1",
    createdAt: "2020-09-09T19:22:16.029Z",
    updatedAt: "2020-09-09T19:22:16.029Z",
    userId: "11",
  },
  {
    id: 8,
    title: "Con lagans mix",
    mix: "mix1",
    createdAt: "2020-09-15T03:35:51.477Z",
    updatedAt: "2020-09-15T03:35:51.477Z",
    userId: "16",
  },
];

const HomeMixes = (props) => {
  return (
    <div className="HomeMixes">
      {mixes.map((song, songIdx) => (
        <div className="song" key={songIdx}>
          hello
        </div>
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
