import React from "react";
import { TextField } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme1 = createMuiTheme({
  palette: {
    secondary: {
      main: "#f3b06a",
    },
  },
});

// const inputProps = {
//   color: "white",
// };

const TitleNewMix = (props) => {
  return (
    <div className="TitleNewMix">
      <MuiThemeProvider theme={theme1}>
        <TextField
          className="tf"
          onChange={props.handleTitleChange}
          name="title"
          color="secondary"
          id="filled-basic"
          label="Title of your mix"
          variant="filled"
          inputProps={{
            style: {
              color: "white",
            },
          }}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default TitleNewMix;
