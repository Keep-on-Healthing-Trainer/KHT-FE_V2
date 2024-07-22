import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/device";
import { color } from "../../../../../styles/theme";

const DataComponents = ( props ) => {

  return (
    <Column onClick={props.onPress}>
        <Img></Img>
        <TextDiv>
            <BoldText>유저 이름</BoldText>
            <Text>아이디</Text>
            <Text>전화번호</Text>
        </TextDiv>
    </Column>
  );
}

export const Column = styled.div`
  width: 800px;
  display: flex;
  border-bottom: solid 1px ${color.Gray[2]};
  padding: 20px 100px;
  gap: 30px;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 600px;
  }
`

export const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${color.Gray[2]};
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const BoldText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${color.Black};
`

export const Text = styled.div`
  width: 450px;
  font-size: 14px;
  font-weight: 500;
  color: ${color.Gray[5]};
`

export default DataComponents;