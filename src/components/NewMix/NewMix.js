import React, { Component } from "react";
import NewMixHeader from "./NewMixHeader.js";
import ChosenArtists from "./ChosenArtists.js";
import ArtistsList from "./ArtistsList.js";
// import SliderView from "./SliderView.js";
import CreateMixButton from "./CreateMixButton.js";
import { newPost } from "../../services/api_helper.js";
import { mixes } from "./Mixes.js";
import { postDetails } from "../../services/api_helper.js"

const findBestMatch = (arr, alreadyHave) => {
  let highScore = 0;
  let highScoreIndex = 0;
  let firstArtistsPossibilites = []

  for (let i = 0; i < mixes.length; i++) {
    let count = 0;
    const mix = mixes[i];

    for (let j = 0; j < arr.length; j++) {

      if (!alreadyHave.includes(mix.title)) {
        
        if (mix.artists.includes(arr[j])) {
          count += 1;
          // console.log(i, count);
          if (mix.firstArtist.includes(arr[j]) && count > 6) {
          firstArtistsPossibilites.push(i)
          }
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
  console.log("buuuut: ", firstArtistsPossibilites);

  if (firstArtistsPossibilites.length > 0) {
    // return last index of firstArtistsPossibilites
    console.log("returning: ", firstArtistsPossibilites[firstArtistsPossibilites.length - 1])
    return mixes[firstArtistsPossibilites[firstArtistsPossibilites.length - 1]];
  }
  else {
    return mixes[highScoreIndex];
  }
  
};

const rapArtists = [
  '24kGoldn',
'50 Cent',
'Anderson Paak',
'Big Sean',
'Call Me Karizma',
'Cardi B',
'Chance The Rapper',
'Convolk',
'DaBaby',
'Drake',
'Eminem',
'Fetty Wap',
'Future',
'G Eazy',
'Iamsu',
'J Cole',
'Kanye West',
'Kid Cudi',
'Kid Ink',
'Kyle',
'Lil Aaron',
'Lil Dicky',
'Lil Peep',
'Lil Pump',
'Lil Uzi Vert',
'Lil Wayne',
'Lil Yachty',
'Mac Miller',
'MGK',
'Migos',
'Nicki Minaj',
'Notorious BIG',
'P-Lo',
'Post Malone',
'Preme',
'Pusha T',
'Quavo',
'Que',
'Sage The Gemini',
'Snoop Dogg',
'T Pain',
'The Game',
'The Weeknd',
'TI',
'Travis Scott',
'Trinidad James',
'Ty Dolla Sign',
'Wiz Khalifa',
'YBN Nahmir',
'Yo Gotti',
'Young Dro',
];

const popArtists = [
  '100 Gecs',
'3Oh!3',
'AJ Mitchell',
'AJR',
'Akon',
'All American Rejects',
'Aloe Blacc',
'Andy Grammer',
'Ariana Grande',
'Backstreet Boys',
'Bastille',
'Billie Eilish',
'Black Eyed Peas',
'Blackbear',
'Blink 182',
'Brakence',
'Bruno Mars',
'Bryce Vine',
'Camila Cabello',
'Charlie XCX',
'Chelsea Cutler',
'Chris Brown',
'Cobra Starship',
'Coldplay',
'Demi Lovato',
'Dua Lipa',
'Ed Sheeran',
'Fifth Harmony',
'Frank Ocean',
'Franz Ferdinand',
'Goody Grace',
'Green Day',
'Halsey',
'Harry Styles',
'Hoodie Allen',
'Jason Derulo',
'Jay Sean',
'Jeremy Zucker',
'Jon Bellion',
'Justin Bieber',
'Katy Perry',
'Kelly Clarkson',
'Kesha',
'Khalid',
'Lady Gaga',
'Lauv',
'Lizzo',
'Lukas Graham',
'Makeout',
'Maroon 5',
'Miguel',
'Mike Posner',
'Owl City',
'Pink',
'Quinn XCII',
'Rihanna',
'Sam Smith',
'Sean Paul',
'Selena Gomez',
'Shakira',
'Shawn Mendes',
'Sia',
'Simple Plan',
'Social House',
'Sum 41',
'SZA',
'Taylor Swift',
'The Fray',
'The Neighborhood',
'The Neighbourhood',
'The Wanted',
'Timeflies',
'Tove Lo',
'Trevor Daniel',
'Uncle Kracker',
'Usher',
'Wallpaper.',
'Weezer',
];

const oldiesArtists = [
  'Bee Gees',
'CCR',
'Cher',
'Chumbawamba',
'Cindi Lauper',
'Creedence Clearwater Revival',
'Cyndi Lauper',
'Diana Ross',
'Eiffel 65',
'Elton John',
'Janis Joplin',
'Journey',
'Michael Jackson',
'Rick Springfield',
'Rolling Stones',
'Survivor',
'The Beatles',
'The Proclaimers',
'Tom Petty',
'Whitney Houston',
];

const danceArtists = [
  'Astrid S',
'Avicii',
'Bebe Rexha',
'Calvin Harris',
'Chainsmokers',
'Cheat Codes',
'Clean Bandit',
  'David Guetta',
  'Disclosure',
  'DJ Snake',
  'Don Diablo',
'Felix Jaehn',
'Flume',
'Galantis',
'Illenium',
'Kygo',
'Loote',
'Loud Luxury',
'Louis The Child',
'Lucas & Steve',
'LZRD',
'Major Lazer',
'Marc E Bassy',
'Marshmello',
'Martin Garrix',
  'Martin Solveig',
  'Matoma',
'Mike Williams',
'NOTD',
'Sam Feldt',
'The Him',
  'Tiesto',
  'Tones and I',
'Topic',
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
      grad: "",
      chosenArtists: [],
      artists: [],
      alreadyHave: [],
      currentUser: this.props.currentUser,
      butHide1: "",
      butHide2: "hide"
    };
  }

  async componentDidMount() {
    await this.randomGrad();
    await this.setAlreadyHave();

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

  setAlreadyHave = async () => {
    
    const userid = this.state.currentUser.id;
    const resp = await postDetails(userid);
    const mixesHave = resp.data

    let arr = []

    for (let i = 0; i < mixesHave.length; i++) {
      arr.push(mixesHave[i].mix)
    }

    this.setState({
      alreadyHave: arr
    })
  }

  handleCreateMix = async (e) => {
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
    console.log("i already have:", this.state.alreadyHave);
    const best = findBestMatch(chosenArtists, this.state.alreadyHave);

    let obj = {
      title: this.state.title,
      mix: best.title,
      grad: this.state.grad,
    };

    console.log("making a new post", obj);
    console.log("the best is", best);

    await newPost(obj);

    this.setState({
      butHide1: "hide",
      butHide2: ""
    })
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
        {/* <SliderView handleSliderChange={this.handleSliderChange} /> */}
        <CreateMixButton
          handleCreateMix={this.handleCreateMix}
          butHide1={this.state.butHide1}
          butHide2={this.state.butHide2}
        />
      </div>
    );
  }
}

export default NewMix;
