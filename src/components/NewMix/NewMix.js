import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import ArtistsList from "./ArtistsList.js";
import SliderView from "./SliderView.js";
import CreateMixButton from "./CreateMixButton.js";
import Popup from "reactjs-popup";
// import ReactAudioPlayer from "react-audio-player";
// import powfu from "../../songtest/powfu.mp3";

import { newPost } from "../../services/api_helper.js";

const findBestMatch = (arr) => {
  const mix1 = ["a", "b", "c", "d", "e", "f"];
  const mix2 = ["a", "d", "e", "f"];
  const mix3 = ["b", "d", "e", "f", "g"];
  const mix4 = ["b", "d", "e", "f", "g", "h"];

  const mixes = [mix1, mix2, mix3, mix4];
  const mixesNames = ["mix1", "mix2", "mix3", "mix4"];

  let highScore = 0;
  let highScoreIndex = 0;

  for (let i = 0; i < mixes.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      const mix = mixes[i];
      if (mix.includes(arr[j])) {
        count += 1;
      }
    }

    if (count > highScore) {
      highScore = count;
      highScoreIndex = i;
    }
  }

  const bestMatchMix = mixesNames[highScoreIndex];

  console.log(bestMatchMix);
  return bestMatchMix;
};

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

const oldiesArtists = [
  "Creedence Clearwater Revival",
  "Elton John",
  "Bee Gees",
  "The Beatles",
  "Tom Petty",
  "Journey",
  "Boston",
  "Pat Benatar",
  "Cyndi Lauper",
  "Rick Springfield",
  "Survivor",
  "Michael Jackson",
  "Chumbawamba",
  "The Doobie Brothers",
  "The Rolling Stones",
  "The Allman Brothers Band",
  "Cher",
  "Diana Ross",
];

const danceArtists = [
  "Cheat Codes",
  "Party Favor",
  "Alan Walker",
  "Galantis",
  "Martin Garrix",
  "Dante Klein",
  "Mako",
  "Don Diablo",
  "Jonas Aden",
  "Brooks",
  "Audien",
];

const createObjArtists = (arr, genre) => {
  let artArrObj = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = {
      name: arr[i],
      genre: genre,
      artistId: `${genre}${i}`,
    };
    artArrObj.push(obj);
  }
  // artArrObj.sort();
  return artArrObj;
};

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

  componentDidMount() {
    const pop = createObjArtists(popArtists, "Pop");
    const rap = createObjArtists(rapArtists, "Rap");
    const dance = createObjArtists(danceArtists, "Dance");
    const oldies = createObjArtists(oldiesArtists, "Oldies");

    this.setState({
      artists: [
        {
          genre: "Pop",
          artists: pop,
        },
        {
          genre: "Rap",
          artists: rap,
        },
        {
          genre: "Dance",
          artists: dance,
        },
        {
          genre: "Oldies",
          artists: oldies,
        },
      ],
    });

    console.log(this.state);
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
    const chosenArtistsState = this.state.chosenArtists;
    let chosenArtists = [];
    console.log(chosenArtistsState);

    //Create array of artists names
    for (let i = 0; i < chosenArtistsState.length; i++) {
      const name = chosenArtistsState[i].name;

      chosenArtists.push(name);
    }

    console.log(chosenArtists);

    //Find best match
    const best = findBestMatch(chosenArtists);

    let obj = {
      title: this.state.title,
      mix: best,
    };

    newPost(obj);
  };

  handleChipClick = (e, post) => {
    e.preventDefault();
    let unchosenArr;
    let chosenArr = this.state.chosenArtists;

    //check to see what genre you should remove the artist from
    if (post.genre === "Pop") {
      unchosenArr = this.state.artists[0].artists;
    } else if (post.genre === "Rap") {
      unchosenArr = this.state.artists[1].artists;
    } else if (post.genre === "Dance") {
      unchosenArr = this.state.artists[2].artists;
    } else if (post.genre === "Oldies") {
      unchosenArr = this.state.artists[3].artists;
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
    console.log(this.state);
  };

  handleChipDelete = async (e, post) => {
    e.preventDefault();
    let unchosenArr;
    let chosenArr = this.state.chosenArtists;

    if (post.genre === "Pop") {
      unchosenArr = this.state.artists[0].artists;
    } else if (post.genre === "Rap") {
      unchosenArr = this.state.artists[1].artists;
    } else if (post.genre === "Dance") {
      unchosenArr = this.state.artists[2].artists;
    } else if (post.genre === "Oldies") {
      unchosenArr = this.state.artists[3].artists;
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
