import React from "react";

import "./Char.css";

const char = (props) => {
  return (
    <div className="char-box" onClick={props.click}>
      <p>{props.charEntered}</p>
    </div>
  );
};

export default char;
