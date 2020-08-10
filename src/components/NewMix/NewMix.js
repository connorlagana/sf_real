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

const rapArtists = [
  "J Cole",
  "Blackbear",
  "Aries",
  "YBN Nahmir",
  "Convolk",
  "Guardin",
  "Brakence",
  "Kyle",
  "Young Money",
  "Call Me Karizma",
  "G Eazy",
  "Sammy Adams",
  "DaBaby",
  "Cardi B",
  "Lil Peep",
  "Big Sean",
  "Schoolboy Q",
  "Drake",
  "T-Pain",
  "Machine Gun Kelly",
  "Notorious B.I.G",
];

const popArtists = [
  "Jason Derulo",
  "Jay Sean",
  "Loote",
  "Weezer",
  "Pink",
  "Kelly Clarkson",
  "Trevor Daniel",
  "Arizona Zervas",
  "100 gecs",
  "Andy Grammer",
  "Timeflies",
  "Wallpaper.",
  "Lizzo",
  "Camila Cabello",
  "Bruno Mars",
  "Goody Grace",
  "Green Day",
  "Blink-182",
  "Franz Ferdinand",
  "Lifehouse",
  "Sean Paul",
  "Jay Sean",
  "Sia",
  "Florida Georgia Line",
];

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
      artists: [],
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
