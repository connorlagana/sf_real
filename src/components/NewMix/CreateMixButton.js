import React from "react";

const CreateMixButton = (props) => {
  return (
    <div className="CreateMixButton">
      <button
        onClick={(e) => {
          props.handleCreateMix(e);
        }}
      >
        Hello World
      </button>
    </div>
  );
};

export default CreateMixButton;
