import React from "react";

import "./Validation.css";

const validation = (props) => {
  let lengthCheck = null;

  lengthCheck =
    props.length < 5 ? (
      <div>
        <p className="shortText">Text is too short</p>
      </div>
    ) : (
      <div>
        <p className="longText">Text too long</p>
      </div>
    );

  return (
    <div className="validation">
      <p>{props.length}</p>
      {lengthCheck}
    </div>
  );
};

export default validation;
