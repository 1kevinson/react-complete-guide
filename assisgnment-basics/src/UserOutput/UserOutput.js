import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>I'm first paragraph</p>
      <p>then I'm the second one</p>
      <p>username : {props.name}</p>
      <p>Job : {props.job}</p>
    </div>
  );
};

export default userOutput;
