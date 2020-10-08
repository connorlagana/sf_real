import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import ArtistsList from "./ArtistsList.js";
import SliderView from "./SliderView.js";
import CreateMixButton from "./CreateMixButton.js";
import { newPost } from "../../services/api_helper.js";
import { mixes } from "./Mixes.js";

const findBestMatch = (arr, alreadyHave) => {
  let highScore = 0;
  let highScoreIndex = 0;

  for (let i = 0; i < mixes.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      const mix = mixes[i];
      if (!alreadyHave.includes(mix.title)) {
        if (mix.artists.includes(arr[j])) {
          count += 1;
          // console.log(i, count);
        }
      } else {
        continue;
      }

      console.log(`${mix.title} has ${count} matches`);
    }

    if (count >= highScore) {
      highScore = count;
      highScoreIndex = i;
    }
  }

  console.log("the winner is: ", mixes[highScoreIndex]);

  return mixes[highScoreIndex];
};

const rapArtists = [
  "24kGoldn",
  "50 Cent",
  "Anderson Paak",
  "Big Sean",
  "Call Me Karizma",
  "Cardi B",
  "Chance The Rapper",
  "Convolk",
  "DaBaby",
  "Drake",
  "Eminem",
  "Fetty Wap",
  "Future",
  "G Eazy",
  "Iamsu",
  "J Cole",
  "Kanye West",
  "Kid Cudi",
  "Kid Ink",
  "Kyle",
  "Lil Aaron",
  "Lil Dicky",
  "Lil Peep",
  "Lil Pump",
  "Lil Uzi Vert",
  "Lil Wayne",
  "Lil Yachty",
  "Mac Miller",
  "Migos",
  "Nicki Minaj",
  "Notorious BIG",
  "P-Lo",
  "Post Malone",
  "Preme",
  "Pusha T",
  "Quavo",
  "Sage The Gemini",
  "Snoop Dogg",
  "T-Pain",
  "The Weeknd",
  "Travis Scott",
  "Trinidad James",
  "Ty Dolla Sign",
  "Wiz Khalifa",
  "YBN Nahmir",
  "Yo Gotti",
  "Young Dro",
];

const popArtists = [
  "100 Gecs",
  "3Oh3!",
  "AJ Mitchell",
  "AJR",
  "Akon",
  "All American Rejects",
  "Aloe Blacc",
  "Andy Grammer",
  "Ariana Grande",
  "Backstreet Boys",
  "Bastille",
  "Billie Eilish",
  "Black Eyed Peas",
  "Blackbear",
  "Blink 182",
  "Bruno Mars",
  "Bryce Vine",
  "Camila Cabello",
  "Charlie XCX",
  "Chris Brown",
  "Cobra Starship",
  "Demi Lovato",
  "Dua Lipa",
  "Ed Sheeran",
  "Fifth Harmony",
  "Frank Ocean",
  "Franz Ferdinand",
  "Goody Grace",
  "Green Day",
  "Jason Derulo",
  "Jay Sean",
  "Jeremy Zucker",
  "Justin Bieber",
  "Katy Perry",
  "Kelly Clarkson",
  "Kesha",
  "Khalid",
  "Lady Gaga",
  "Lauv",
  "Lizzo",
  "Lukas Graham",
  "Makeout",
  "Maroon 5",
  "Mike Posner",
  "Owl City",
  "Pink",
  "Quinn XCII",
  "Rihanna",
  "Sean Paul",
  "Selena Gomez",
  "Shakira",
  "Sia",
  "Simple Plan",
  "Social House",
  "Sum 41",
  "SZA",
  "The Neighbourhood",
  "The Wanted",
  "Timeflies",
  "Tove Lo",
  "Trevor Daniel",
  "Uncle Kracker",
  "Usher",
  "Wallpaper.",
  "Weezer",
];

const oldiesArtists = [
  "Bee Gees",
  "Cher",
  "Chumbawamba",
  "Creedence Clearwater Revival",
  "Cyndi Lauper",
  "Diana Ross",
  "Eiffel 65",
  "Elton John",
  "Janis Joplin",
  "Journey",
  "Michael Jackson",
  "Rick Springfield",
  "Rolling Stones",
  "Survivor",
  "The Beatles",
  "The Proclaimers",
  "Tom Petty",
];

const danceArtists = [
  "Astrid S",
  "Avicii",
  "Bebe Rexha",
  "Calvin Harris",
  "Chainsmokers",
  "Cheat Codes",
  "Clean Bandit",
  "David Guetta",
  "DJ Snake",
  "Felix Jaehn",
  "Flume",
  "Galantis",
  "Illenium",
  "Kygo",
  "Loote",
  "Loud Luxury",
  "Louis The Child",
  "Lucas & Steve",
  "LZRD",
  "Major Lazer",
  "Marc E Bassy",
  "Marshmello",
  "Martin Garrix",
  "Martin Solveig",
  "Mike Williams",
  "NOTD",
  "Sam Feldt",
  "The Him",
  "Tiesto",
  "Tones & I",
  "Topic",
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
      grad: "grad1",
      chosenArtists: [],
      artists: [],
      alreadyHave: [],
      currentUser: this.props.currentUser,
    };
  }

  async componentDidMount() {
    await this.randomGrad();

    const pop = createObjArtists(popArtists, "Pop");
    const rap = createObjArtists(rapArtists, "Rap");
    const dance = createObjArtists(danceArtists, "Dance");
    const oldies = createObjArtists(oldiesArtists, "Oldies");

    this.setState({
      genres: {},
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

  randomGrad = () => {
    const numberOfGrads = 10;

    const rand = Math.floor(Math.random() * numberOfGrads + 1);

    const randGradStr = `grad${rand}`;

    this.setState({
      grad: randGradStr,
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
    const best = findBestMatch(chosenArtists, this.state.alreadyHave);

    let obj = {
      title: this.state.title,
      mix: best,
      grad: this.state.grad,
    };

    newPost(obj);
  };

  handleSliderChange = (genres) => {
    // this.setState({
    //   genres: genres,
    // });
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

    for (let i = 0; i < unchosenArr.length; i++) {
      if (unchosenArr[i].artistId === post.artistId) {
        unchosenArr.splice(i, 1);
      }
    }

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
        <SliderView handleSliderChange={this.handleSliderChange} />
        <CreateMixButton handleCreateMix={this.handleCreateMix} />
      </div>
    );
  }
}

export default NewMix;
