import React from "react";

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
      <button className={props.butHide2}>
        Return To Home
      </button>
    </div>
  );
};

export default CreateMixButton;
