import React from "react";
import { Link } from "react-router-dom";

let obj = [
  "https://i.scdn.co/image/ab67616d0000b2732b517912fd69652ff10d8e11",
  "https://images.genius.com/a8de6b36ccc06b0e9096884115bfea8c.1000x1000x1.jpg",
  "https://img.discogs.com/kQqocLZA1ZA6k0s4LUuW_zRdnU4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11094025-1509741092-8113.jpeg.jpg",
  "https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg",
  "https://media.pitchfork.com/photos/5929b22f13d197565213a719/1:1/w_600/67ce3bba.jpg",
  "https://upload.wikimedia.org/wikipedia/en/7/78/Grateful_by_DJ_Khaled_cover.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81mgkSDtV-L._SL1400_.jpg",
  "https://images.genius.com/982dbb22089c94caeaf1fd508907dc8b.1000x1000x1.jpg",
  "https://upload.wikimedia.org/wikipedia/en/c/c8/CarterIII.jpg",
  "https://media.pitchfork.com/photos/5929c1bf5e6ef9596932375b/1:1/w_600/47966ea0.jpg",
  "https://media.pitchfork.com/photos/5929bc1f5e6ef95969322d89/1:1/w_600/c099760e.jpg",
  "https://m.media-amazon.com/images/I/71bjpR6DzqL.jpg",
  "https://media.pitchfork.com/photos/5929bd8bea9e61561daa7719/1:1/w_320/3160cbd9.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5b/Chance_the_rapper_acid_rap.jpg",
  "https://img.discogs.com/R44Nk7nZSDB763txs23qxMhx1O4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12638800-1539702198-7830.jpeg.jpg",
  "https://upload.wikimedia.org/wikipedia/en/7/70/J5-abc.jpg",
  "https://i.scdn.co/image/ab67616d0000b2734bdfa3edb4c521c570b8c14a",
  "https://images-na.ssl-images-amazon.com/images/I/81PCGc9LjIL._SL1500_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71d8gXwt1fL._SL1500_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71SKgZM2%2BsL._SL1500_.jpg",
  "https://media.pitchfork.com/photos/5929aea713d197565213a144/1:1/w_600/ce403a0f.jpg",
  "https://townsquare.media/site/838/files/2020/05/rtj4.jpg?w=980&q=75",
  "https://edmidentity.com/wp-content/uploads/2020/03/Artwork-Nights-Like-This-EP.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81DPAsQEvPL._SL1500_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Sum_41_All_Killer_No_Filler.jpg",
  "https://townsquare.media/site/812/files/2019/05/eminem-the-marshall-mathers-lp.jpg?w=1080&q=75",
  "https://images-na.ssl-images-amazon.com/images/I/711gOQ266AL._SL1400_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/e4/The_Dutchess.png",
  "https://media.pitchfork.com/photos/5929b5cac0084474cd0c24a3/1:1/w_320/17cc3eca.jpg",
  "https://media.pitchfork.com/photos/5929aef7c0084474cd0c19be/1:1/w_320/97efc203.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Graduation_%28album%29.jpg/220px-Graduation_%28album%29.jpg",
  "https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg",
  "https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png",
  "https://upload.wikimedia.org/wikipedia/en/3/35/Bloodsweat3years.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81v9phi4sHL._SL1500_.jpg",
  "https://media.pitchfork.com/photos/595e5aa7852c5349b5b65a20/1:1/w_600/funkwavebounces_calvin.jpg",
  "https://upload.wikimedia.org/wikipedia/en/6/64/The-Days-Nights-EP-by-Avicii.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Lauv_-_How_I%27m_Feeling.png/220px-Lauv_-_How_I%27m_Feeling.png",
  "https://m.media-amazon.com/images/I/51xnAwocf1L._SS500_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5d/Incredibad.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81ch1Foa-dL._SL1500_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71Q2D-XDOaL._SY355_.jpg",
];

const MainFront = () => {
  return (
    <div className="MainFront">
      <div className="leftFront">
        <div className="centeredStack">
          <div id="bigLabel">Music is everything</div>
          <div id="smallLabel">
            All your favorite songs in a 1 hour mix. No credit card needed.
          </div>
          <Link to="/register">
            <button>Get Soundflex Free</button>
          </Link>
        </div>
      </div>
      <div className="rightFront">
        {obj.map((art) => (
          <div className="art">
            <img src={art} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFront;
