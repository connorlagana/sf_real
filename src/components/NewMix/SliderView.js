import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },

//   thumb: {
//     height: 28,
//     width: 28,
//   },
// });

function valuetext(value) {
  return `${value}°C`;
}
const genres = [
  {
    name: "Pop",
    num: 60,
  },
  {
    name: "Rap",
    num: 20,
  },
  {
    name: "Dance",
    num: 90,
  },
  {
    name: "Oldies",
    num: 40,
  },
];

const SliderView = () => {
  return (
    <div className="SliderView">
      <div className="sliders">
        {genres.map((genre) => (
          <div className="indSlider">
            <div>
              {genre.name}: {}
            </div>
            <div className="belowTitle">
              <div>Like</div>
              <Slider
                defaultValue={genre.num}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
              <div>Dislike</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderView;
