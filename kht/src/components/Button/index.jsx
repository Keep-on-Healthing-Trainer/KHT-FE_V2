import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

const Button = (props) => {

  return (
    <Btn>{props.innerText}</Btn>
  );
}

export const Btn = styled.button`
  font-size: 22px;
  font-weight: bold;
  color: ${color.White};

  background-color: ${color.Blue[8]};
  border-radius: 10px;
  border: none;

  width: 41vw;
  height: 6vh;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;