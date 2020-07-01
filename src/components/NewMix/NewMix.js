import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import ArtistsList from "./ArtistsList.js";

// import ReactAudioPlayer from "react-audio-player";
// import powfu from "../../songtest/powfu.mp3";

class NewMix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenArtists: [],
      artists: [
        {
          genre: "Rap",
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
            {
              name: "Jalen Santoy",
              artistId: 100,
            },
            {
              name: "Hopsin",
              artistId: 101,
            },
            {
              name: "IshDARR",
              artistId: 102,
            },
            {
              name: "K CAMP",
              artistId: 103,
            },
            {
              name: "Kid Cudi",
              artistId: 104,
            },
            {
              name: "Kanye West",
              artistId: 105,
            },
            {
              name: "Big L",
              artistId: 106,
            },
            {
              name: "Eminem",
              artistId: 107,
            },
            {
              name: "Jay-Z",
              artistId: 108,
            },
            {
              name: "ASAP Rocky",
              artistId: 109,
            },
            {
              name: "Drake",
              artistId: 110,
            },
            {
              name: "Jalen Santoy",
              artistId: 111,
            },
            {
              name: "Hopsin",
              artistId: 112,
            },
            {
              name: "IshDARR",
              artistId: 113,
            },
            {
              name: "K CAMP",
              artistId: 114,
            },
            {
              name: "Kid Cudi",
              artistId: 115,
            },
          ],
        },
        {
          genre: "Dance",
          artists: [
            {
              name: "Cheat Codes",
              artistId: 11117,
            },
            {
              name: "Galantis",
              artistId: 1118,
            },
            {
              name: "VAVO",
              artistId: 119,
            },
            {
              name: "Sam Feldt",
              artistId: 1110,
            },
            {
              name: "Lost Kings",
              artistId: 11,
            },
            {
              name: "A-Track",
              artistId: 1112,
            },
            {
              name: "Cheat Codes",
              artistId: 1117,
            },
            {
              name: "Galantis",
              artistId: 118,
            },
            {
              name: "VAVO",
              artistId: 119,
            },
            {
              name: "Sam Feldt",
              artistId: 110,
            },
            {
              name: "Lost Kings",
              artistId: 111,
            },
            {
              name: "A-Track",
              artistId: 112,
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

  handleChipClick = (e, postId) => {
    e.preventDefault();
    console.log(postId);
    console.log("deleting");
    let arr = [];
    for (let i = 0; i < this.state.artists.length; i++) {
      let arr2 = [];
      const genre = this.state.artists[i].genre;
      console.log(genre);
      for (let j = 0; j < this.state.artists[i].artists.length; j++) {
        if (this.state.artists[i].artists[j].artistId != postId) {
          arr2.push(this.state.artists[i].artists[j]);
          console.log();
        }
      }

      let obj = {
        genre: genre,
        artists: arr2,
      };
      arr.push(obj);
      this.setState({
        artists: arr,
      });
      console.log(arr2);
    }

    // this.setState({
    //   chosenArtists: arr,
    // });
  };

  handleChipDelete = async (e, postId) => {
    e.preventDefault();
    console.log(postId);
    console.log("deleting");

    var arr = [];

    for (let i = 0; i < this.state.chosenArtists.length; i++) {
      if (this.state.chosenArtists[i].artistId != postId) {
        arr.push(this.state.chosenArtists[i]);
      }
    }

    this.setState({
      chosenArtists: arr,
    });
  };

  render() {
    return (
      <div className="NewMix">
        <NewMixHeader />
        <ChosenArtists
          handleChipDelete={this.handleChipDelete}
          chosenArtists={this.state.chosenArtists}
        />
        <ArtistsList
          artists={this.state.artists}
          handleChipClick={this.handleChipClick}
        />
      </div>
    );
  }
}

export default NewMix;
