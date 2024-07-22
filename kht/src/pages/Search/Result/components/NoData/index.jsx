import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../../../../styles/theme";

import NoDataIcon from "../../../../../assets/icon/NoDataIcon";

const NoDataComponents = ( props ) => {

  return (
    <NoDataDiv>
        <NoDataIcon />
        <NoDataText>유저를 찾을 수 없습니다.</NoDataText>
        <Btn onClick={props.onPress}>메인 페이지로 돌아가기</Btn>
    </NoDataDiv>
  );
}

export const NoDataText = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: ${color.Gray[4]};
`

export const Btn = styled.button`
  width: 280px;
  height: 60px;
  background-color: ${color.Blue[8]};
  border: none;
  color: ${color.White};
  font-size: 18px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const NoDataDiv = styled.div`
  height: 60vh;
  row-gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default NoDataComponents;