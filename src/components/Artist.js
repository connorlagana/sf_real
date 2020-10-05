import React, { Component } from "react";

class Artist extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="artistList">
        {this.props.artists.map((artist) => (
          <div className="artist">
            <div id="artistTitle">{artist.artist}</div>
            <img src={artist.image} alt="" />
            <button>Add to mix</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Artist;
