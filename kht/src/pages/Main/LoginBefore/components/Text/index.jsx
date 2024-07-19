import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/device";
import { color } from "../../../../../styles/theme";

const TextComponents = ( props ) => {

  return (
        <Text>
            <div>
                <Font>{props.topFont}</Font>
                <Font>{props.centerFont}</Font>
            </div>
            <SmallFont>{props.bottomFont}</SmallFont>
        </Text>
  );
}

export const Text = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 50px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 70vh;
  }
`

export const Font = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: ${color.Black};
  user-select: none;
`

export const SmallFont = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${color.Gray[4]};
  user-select: none;
`

export const Button = styled.button`
  width: 270px;
  height: 7vh;
  background-color: ${color.Blue[8]};
  color: ${color.White};
  font-size: 22px;
  font-weight: 600;
  border: none;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`

export default TextComponents;