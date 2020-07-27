import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import ArtistsList from "./ArtistsList.js";
import SliderView from "./SliderView.js";
import CreateMixButton from "./CreateMixButton.js";
import Popup from "reactjs-popup";
// import ReactAudioPlayer from "react-audio-player";
// import powfu from "../../songtest/powfu.mp3";

import { newPost, postDetails } from "../../services/api_helper.js";

class NewMix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ratings: {
        rap: 0,
        dance: 0,
        pop: 0,
      },
      chosenArtists: [],
      artists: [
        {
          genre: "Rap",
          artists: [
            {
              name: "Kanye West",
              artistId: 1,
              genre: "Rap",
            },
            {
              name: "Big L",
              artistId: 2,
              genre: "Rap",
            },
            {
              name: "Eminem",
              artistId: 3,
              genre: "Rap",
            },
            {
              name: "Jay-Z",
              artistId: 4,
              genre: "Rap",
            },
            {
              name: "ASAP Rocky",
              artistId: 5,
              genre: "Rap",
            },
            {
              name: "Drake",
              artistId: 6,
              genre: "Rap",
            },
            {
              name: "Jalen Santoy",
              artistId: 100,
              genre: "Rap",
            },
            {
              name: "Hopsin",
              artistId: 101,
              genre: "Rap",
            },
            {
              name: "IshDARR",
              artistId: 102,
              genre: "Rap",
            },
            {
              name: "K CAMP",
              artistId: 103,
              genre: "Rap",
            },
            {
              name: "Kid Cudi",
              artistId: 104,
              genre: "Rap",
            },
            {
              name: "Kanye West",
              artistId: 105,
              genre: "Rap",
            },
            {
              name: "Big L",
              artistId: 106,
              genre: "Rap",
            },
            {
              name: "Eminem",
              artistId: 107,
              genre: "Rap",
            },
            {
              name: "Jay-Z",
              artistId: 108,
              genre: "Rap",
            },
            {
              name: "ASAP Rocky",
              artistId: 109,
              genre: "Rap",
            },
            {
              name: "Drake",
              artistId: 110,
            },
            {
              name: "Jalen Santoy",
              artistId: 111,
              genre: "Rap",
            },
            {
              name: "Hopsin",
              artistId: 112,
              genre: "Rap",
            },
            {
              name: "IshDARR",
              artistId: 113,
              genre: "Rap",
            },
            {
              name: "K CAMP",
              artistId: 114,
              genre: "Rap",
            },
            {
              name: "Kid Cudi",
              artistId: 115,
              genre: "Rap",
            },
          ],
        },
        {
          genre: "Dance",
          artists: [
            {
              name: "Cheat Codes",
              artistId: 11117,
              genre: "Dance",
            },
            {
              name: "Galantis",
              artistId: 1118,
              genre: "Dance",
            },
            {
              name: "VAVO",
              artistId: 119,
              genre: "Dance",
            },
            {
              name: "Sam Feldt",
              artistId: 1110,
              genre: "Dance",
            },
            {
              name: "Lost Kings",
              artistId: 11,
              genre: "Dance",
            },
            {
              name: "A-Track",
              artistId: 1112,
              genre: "Dance",
            },
            {
              name: "Cheat Codes",
              artistId: 1117,
              genre: "Dance",
            },
            {
              name: "Galantis",
              artistId: 118,
              genre: "Dance",
            },
            {
              name: "VAVO",
              artistId: 119,
              genre: "Dance",
            },
            {
              name: "Sam Feldt",
              artistId: 110,
              genre: "Dance",
            },
            {
              name: "Lost Kings",
              artistId: 111,
              genre: "Dance",
            },
            {
              name: "A-Track",
              artistId: 112,
              genre: "Dance",
            },
          ],
        },
        {
          genre: "Pop",
          artists: [
            {
              name: "Noah Cyrus",
              artistId: 13,
              genre: "Pop",
            },
            {
              name: "Kelly Clarkson",
              artistId: 14,
              genre: "Pop",
            },
            {
              name: "Katy Perry",
              artistId: 15,
              genre: "Pop",
            },
            {
              name: "Jay Sean",
              artistId: 16,
              genre: "Pop",
            },
            {
              name: "Fergie",
              artistId: 17,
              genre: "Pop",
            },
            {
              name: "Gnash",
              artistId: 18,
              genre: "Pop",
            },
          ],
        },
      ],
    };
  }

  handleTitleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCreateMix = (e) => {
    e.preventDefault();
    console.log("Creating a mix");

    let obj = {
      title: this.state.title,
      mix: "https://media.vocaroo.com/mp3/1ohtk7IZgs5",
    };

    newPost(obj);
  };

  handleChipClick = (e, post) => {
    e.preventDefault();
    let unchosenArr;
    let chosenArr = this.state.chosenArtists;

    //check to see what genre you should remove the artist from
    if (post.genre === "Rap") {
      unchosenArr = this.state.artists[0].artists;
    } else if (post.genre === "Dance") {
      unchosenArr = this.state.artists[1].artists;
    } else if (post.genre === "Pop") {
      unchosenArr = this.state.artists[2].artists;
    }
    // unchosenArr.filter((a) => a.genre != "Rap");

    for (let i = 0; i < unchosenArr.length; i++) {
      if (unchosenArr[i].artistId === post.artistId) {
        unchosenArr.splice(i, 1);
      }
    }

    console.log(unchosenArr);
    chosenArr.push(post);

    this.setState({});
  };

  handleChipDelete = async (e, post) => {
    e.preventDefault();
    let unchosenArr;
    let chosenArr = this.state.chosenArtists;

    if (post.genre === "Rap") {
      unchosenArr = this.state.artists[0].artists;
    } else if (post.genre === "Dance") {
      unchosenArr = this.state.artists[1].artists;
    } else if (post.genre === "Pop") {
      unchosenArr = this.state.artists[2].artists;
    }

    //remove from chosenArr
    for (let i = 0; i < chosenArr.length; i++) {
      if (chosenArr[i].artistId === post.artistId) {
        chosenArr.splice(i, 1);
      }
    }

    //add to end of unchosenArr
    unchosenArr.push(post);

    this.setState({});
  };

  render() {
    return (
      <div className="NewMix">
        <NewMixHeader handleTitleChange={this.handleTitleChange} />
        <ChosenArtists
          handleChipDelete={this.handleChipDelete}
          chosenArtists={this.state.chosenArtists}
        />
        <ArtistsList
          artists={this.state.artists}
          handleChipClick={this.handleChipClick}
        />
        <SliderView />
        <CreateMixButton handleCreateMix={this.handleCreateMix} />
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
      </div>
    );
  }
}

export default NewMix;
