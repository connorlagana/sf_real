import React from "react";
import { Chip } from "@material-ui/core";

const ChosenArtists = (props) => {
  return (
    <div className="ChosenArtists">
      <div id="title">Chosen Artists: {props.chosenArtists.length}</div>
      <div className="artists">
        {props.chosenArtists.map((artist) => (
          <div id="chip">
            <Chip
              label={artist.name}
              // onClick={props.handleChipClick}
              onDelete={(e) => {
                props.handleChipDelete(e, artist.artistId);
              }}
              name={artist.artistId}
              clickable
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChosenArtists;
