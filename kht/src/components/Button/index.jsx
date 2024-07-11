import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/device";
import { color } from "../../styles/theme";

const Button = (props) => {

  return (
    <Btn onClick={props.onClick}>{props.innerText}</Btn>
  );
}

export const Btn = styled.button`
  font-size: 22px;
  font-weight: bold;
  color: ${color.White};
  background-color: ${color.Blue[8]};
  border-radius: 10px;
  border: none;
  width: 750px;
  height: 6vh;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 550px;
  }
`;

export default Button;