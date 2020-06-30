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
        {
          genre: "rap",
          artists: [
            {
              name: "Kanye West",
              artistId: 1,
            },
            {
              name: "Big L",
              artistId: 2,
            },
            {
              name: "Eminem",
              artistId: 3,
            },
            {
              name: "Jay-Z",
              artistId: 4,
            },
            {
              name: "ASAP Rocky",
              artistId: 5,
            },
            {
              name: "Drake",
              artistId: 6,
            },
          ],
        },
        {
          genre: "Dance",
          artists: [
            {
              name: "Cheat Codes",
              artistId: 7,
            },
            {
              name: "Galantis",
              artistId: 8,
            },
            {
              name: "VAVO",
              artistId: 9,
            },
            {
              name: "Sam Feldt",
              artistId: 10,
            },
            {
              name: "Lost Kings",
              artistId: 11,
            },
            {
              name: "A-Track",
              artistId: 12,
            },
          ],
        },
        {
          genre: "Pop",
          artists: [
            {
              name: "Noah Cyrus",
              artistId: 13,
            },
            {
              name: "Kelly Clarkson",
              artistId: 14,
            },
            {
              name: "Katy Perry",
              artistId: 15,
            },
            {
              name: "Jay Sean",
              artistId: 16,
            },
            {
              name: "Fergie",
              artistId: 17,
            },
            {
              name: "Gnash",
              artistId: 18,
            },
          ],
        },
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
          {/* <ReactAudioPlayer
            src={powfu}
            autoPlay
            controls
          /> */}
        </div>
      </div>
    );
  }
}

export default NewMix;
