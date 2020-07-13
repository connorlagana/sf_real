import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },

  thumb: {
    height: 28,
    width: 28,
  },
});

function valuetext(value) {
  return `${value}°C`;
}
const genres = [
  {
    name: "Rap",
    num: 20,
  },
  {
    name: "Dance",
    num: 80,
  },
  {
    name: "Pop",
    num: 50,
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
              <div>👎🏻</div>
              <Slider
                defaultValue={genre.num}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
              <div>🔥</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderView;
