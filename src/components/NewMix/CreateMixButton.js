import React from "react";
import {Link} from "react-router-dom"

const CreateMixButton = (props) => {
  return (
    <div className="CreateMixButton">
      <button className={props.butHide1}
        onClick={(e) => {
          props.handleCreateMix(e);
        }}
      >
        Create Mix
      </button>
      <Link to="/home">
      <button className={props.butHide2}>
          Return To Home
      </button>
      </Link>
    </div>
  );
};

export default CreateMixButton;
