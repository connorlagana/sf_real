import React from "react";
import { Chip } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme1 = createMuiTheme({
  palette: {
    secondary: {
      main: "#f3b06a",
    },
  },
});

const ChosenArtists = (props) => {
  return (
    <div className="ChosenArtists">
      <div id="title">Chosen Artists: {props.chosenArtists.length}</div>
      <div className="artists">
        {props.chosenArtists.map((artist) => (
          <MuiThemeProvider theme={theme1} id="chip">
            <Chip
              label={artist.name}
              color="secondary"
              // onClick={props.handleChipClick}
              onDelete={(e) => {
                props.handleChipDelete(e, artist.artistId);
              }}
              name={artist.artistId}
              clickable
              inputProps={{
                style: { color: "white" },
              }}
            />
          </MuiThemeProvider>
        ))}
      </div>
    </div>
  );
};

export default ChosenArtists;
