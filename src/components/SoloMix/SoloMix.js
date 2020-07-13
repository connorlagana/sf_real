import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

const song = "https://media.vocaroo.com/mp3/1ohtk7IZgs5";

class SoloMix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SoloMix">
        <div>Hello from solo mix</div>
        <ReactAudioPlayer src={song} controls />
      </div>
    );
  }
}

export default SoloMix;
