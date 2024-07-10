import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

const State = (props) => {

  return (
    <Text>{props.innerText}</Text>
  );
}

export const Text = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${color.Blue[8]};
  user-select: none;
`;

export default State;