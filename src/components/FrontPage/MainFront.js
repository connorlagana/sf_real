import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import pic1 from "../../pics/1.jpg";
import pic2 from "../../pics/2.jpg";
import pic3 from "../../pics/3.jpg";
import pic4 from "../../pics/4.jpg";
import pic5 from "../../pics/5.jpg";
import pic6 from "../../pics/6.jpg";
import pic7 from "../../pics/7.jpg";
import pic8 from "../../pics/8.jpg";
import pic9 from "../../pics/9.PNG";
import pic10 from "../../pics/10.jpg";
import pic11 from "../../pics/11.png";
import pic12 from "../../pics/12.jpg";
import pic13 from "../../pics/13.jpg";
import pic14 from "../../pics/14.jpg";
import pic15 from "../../pics/15.jpg";
import pic16 from "../../pics/16.png";
import pic17 from "../../pics/17.png";
import pic18 from "../../pics/18.jpeg";
import pic19 from "../../pics/19.png";
import pic20 from "../../pics/20.jpg";
import pic21 from "../../pics/21.jpg";
import pic22 from "../../pics/22.jpg";
import pic23 from "../../pics/23.jpg";
import pic24 from "../../pics/24.jpg";
import pic25 from "../../pics/25.jpg";
import pic26 from "../../pics/26.jpg";
import pic27 from "../../pics/27.jpg";
import pic28 from "../../pics/28.jpg";
import pic29 from "../../pics/29.jpg";
import pic30 from "../../pics/30.jpg";
import pic31 from "../../pics/31.jpg";
import pic32 from "../../pics/32.jpg";
import pic33 from "../../pics/33.jpg";
import pic34 from "../../pics/34.jpg";
import pic35 from "../../pics/35.jpg";
import pic36 from "../../pics/36.png";
import pic37 from "../../pics/37.jpg";
import pic38 from "../../pics/38.jpg";
import pic39 from "../../pics/39.jpg";
import pic40 from "../../pics/40.png";
import pic41 from "../../pics/41.jpg";
import pic42 from "../../pics/42.jpg";

// import { motion } from "framer-motion";

let obj = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
  pic25,
  pic26,
  pic27,
  pic28,
  pic29,
  pic30,
  pic31,
  pic32,
  pic33,
  pic34,
  pic35,
  pic36,
  pic37,
  pic38,
  pic39,
  pic40,
  pic41,
  pic42,
];

class MainFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
    };
  }

  shuffle = (arr) => {
    var ctr = arr.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
  };

  componentDidMount() {
    const shuffledArr = this.shuffle(obj);

    this.setState({
      pics: shuffledArr,
    });
  }

  render() {
    return (
      <div className="MainFront">
        <div className="leftFront">
          <div className="centeredStack">
            <Fade top>
              <div id="bigLabel">Music made for you.</div>
            </Fade>
            <Fade>
              <div id="smallLabel">
                All of your favorite songs in a 1 hour mix. No credit card
                needed.
              </div>
            </Fade>
            <Link to="/register">
              <Fade bottom>
                <button>Get Soundflex Free</button>
              </Fade>
            </Link>
          </div>
        </div>
        <div className="rightFront">
          {this.state.pics.map((art, artIdx) => (
            <div className="art" key={artIdx}>
              <img src={art} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainFront;
