import React, { Component } from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";

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
        </div>
        <div className="bottomNew"></div>
      </div>
    );
  }
}

export default NewMix;
