import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/device";
import { color } from "../../../../../styles/theme";

const SelectComponents = ( props ) => {

  return (
    <Select>
    {props.data == "1" ? (
      <FocusBtn onClick={props.onPressOne}>윗몸일으키기</FocusBtn>
    ) : (
      <Btn onClick={props.onPressOne}>윗몸일으키기</Btn>
    )}
    {props.data == "2" ? (
      <FocusBtn onClick={props.onPressTwo}>스쿼트</FocusBtn>
    ) : (
      <Btn onClick={props.onPressTwo}>스쿼트</Btn>
    )}
    {props.data == "3" ? (
      <FocusBtn onClick={props.onPressThr}>팔굽혀펴기</FocusBtn>
    ) : (
      <Btn onClick={props.onPressThr}>팔굽혀펴기</Btn>
    )}
  </Select>
  );
}

export const Select = styled.div`
  width: 1000px;
  border-bottom: solid 2px ${color.Gray[2]};
  gap: 1vw;
  display: flex;

  @media only screen and (max-width: ${breakpoints.large}) {
    width: 800px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 600px;
  }
`

export const Btn = styled.button`
  width: 120px;
  height: 5vh;
  background-color: ${color.White};
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${color.Gray[4]};

  &:hover {
    cursor: pointer;
  }
`

export const FocusBtn = styled.button`
  width: 120px;
  height: 5vh;
  background-color: ${color.White};
  border: none;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 2px 0 ${color.Blue[8]};
  color: ${color.Black};

  &:hover {
    cursor: pointer;
  }
`

export default SelectComponents;