import React, { Component } from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

import ReactAudioPlayer from "react-audio-player";
import powfu from "../../songtest/powfu.mp3";

class NewMix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenArtists: ["Kanye West", "Eminem", "VAVO"],
      artists: [
        "Kanye West",
        "Blink-182",
        "Calvin Harris",
        "Kid Quill",
        "G-Eazy",
        "Eminem",
        "The Script",
        "Aries",
        "YBN Nahmir",
        "VAVO",
        "Ryan Caraveo",
        "Galantis",
      ],
    };
  }

  render() {
    return (
      <div className="NewMix">
        <div className="fixedHeader">
          <div className="topFH">
            <Link to="/home">
              <KeyboardArrowLeft id="left" />
            </Link>
            <Link to="/home">
              <KeyboardArrowRight id="left" />
            </Link>
          </div>
          <div className="midFH">
            <label>Name of Mix: </label>
            <TextField placeholder="ConsMix 1" />
          </div>
        </div>
        <div className="bottomNew">
          <button>Create</button>
          <ReactAudioPlayer
            src="http://dl24.youtubetomp3music.com/file/youtubeT7LkwWrLFao320.mp3?fn=Powfu%20-%20break%20ups%20suck%20ass%20%F0%9F%98%9E%20(ft.%20sadeyes).mp3"
            autoPlay
            controls
          />
        </div>
      </div>
    );
  }
}

export default NewMix;
