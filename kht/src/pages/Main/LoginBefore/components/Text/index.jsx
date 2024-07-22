import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../../../../styles/theme";

const TextComponents = ( props ) => {

  return (
    <TextDiv>
        {props.text ? (
            <TopFont>{props.text}</TopFont>
        ) : (
            <></>
        )}
        <Text>
            <Font>{props.topFont}</Font>
            <Font>{props.centerFont}</Font>
        </Text>
        <SmallFont>{props.bottomFont}</SmallFont>
        {props.buttonState ? (
            <Button onClick={props.onPress}>KHT 시작하기</Button>
        ) : (
            <></>
        )}
    </TextDiv>
  );
}

export const TextDiv = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 50px;
`

export const TopFont = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${color.Blue[10]};
  user-select: none;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 300px;
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