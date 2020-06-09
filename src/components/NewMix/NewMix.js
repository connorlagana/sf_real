import React, { Component } from "react";

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
          <div className="topFH"></div>
        </div>
        <div className="bottomNew"></div>
      </div>
    );
  }
}

export default NewMix;
