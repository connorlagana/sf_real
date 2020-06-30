import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import TitleNewMix from "./TitleNewMix.js";

import ReactAudioPlayer from "react-audio-player";
import powfu from "../../songtest/powfu.mp3";

class NewMix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenArtists: [
        {
          name: "Kanye West",
          artistId: 1,
        },
        {
          name: "Galantis",
          artistId: 8,
        },
        {
          name: "Sam Feldt",
          artistId: 10,
        },
        {
          name: "Fergie",
          artistId: 17,
        },
      ],
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

  handleChipClick = () => {
    console.log("clicking");
  };

  handleChipDelete = () => {
    console.log("deleting");
  };

  render() {
    return (
      <div className="NewMix">
        <NewMixHeader />
        <TitleNewMix />
        <ChosenArtists
          handleChipClick={this.handleChipClick}
          handleChipDelete={this.handleChipDelete}
          chosenArtists={this.state.chosenArtists}
        />

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
