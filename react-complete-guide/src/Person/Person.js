import React from "react";
import styled from "styled-components";

import "./Person.css";

const StyledDiv = styled.div`
  width: 50%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 3rem;
  text-align: center;
  border-radius: 7px;
  margin: 1.5rem auto;
  font-size: 1.5rem;

  @media (min-width: 500px) : {
    width: "40%";
  }
`;

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
