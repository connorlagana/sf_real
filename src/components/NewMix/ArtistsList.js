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

const ArtistsList = (props) => {
  return (
    <div className="ArtistsList">
      {props.artists.map((genre, genreIdx) => (
        <div className="genre" key={genreIdx}>
          <div id="title">{genre.genre}</div>
          <div className="underTitle">
            {genre.artists.map((artist, artistIdx) => (
              <MuiThemeProvider theme={theme1} id="chip" key={artistIdx}>
                <Chip
                  label={artist.name}
                  color="secondary"
                  onClick={(e) => {
                    props.handleChipClick(e, artist);
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
      ))}
    </div>
  );
};

export default ArtistsList;
