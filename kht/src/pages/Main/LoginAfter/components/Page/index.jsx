import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../../../../styles/theme";

import ColorPrevious from "../../../../../assets/icon/ColorPrevious";
import NoColorPrevious from "../../../../../assets/icon/NoColorPrevious";
import ColorNext from "../../../../../assets/icon/ColorNext";
import NoColorNext from "../../../../../assets/icon/NoColorNext";

const PageComponents = ( props ) => {

  return (
    <Container>
      {props.pages == "1" ? (
          <Textdiv>
            <NoColorPrevious />
            <NoColorText>Previous</NoColorText>
          </Textdiv>
      ) : (
          <Textdiv>
            <ColorPrevious />
            <ColorText>Previous</ColorText>
          </Textdiv>
      )}
      <Textdiv>
        <Count>{props.pages}</Count>
        <NoColorText>of</NoColorText>
        <NoColorText>20</NoColorText>
      </Textdiv>
      {props.pages == "20" ? (
        <Textdiv>
          <NoColorText>Next</NoColorText>
          <NoColorNext />
        </Textdiv>
      ) : (
        <Textdiv>
          <ColorText>Next</ColorText>
          <ColorNext />
        </Textdiv>
      )}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

export const Textdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ColorText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.Blue[10]};
  user-select: none;
`

export const NoColorText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.Gray[4]};
  user-select: none;
`

export const Count = styled.div`
  width: 55px;
  height: 45px;
  border: solid 1.5px ${color.Gray[4]};
  border-radius: 3px;
  font-size: 16px;
  color: ${color.Gray[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

export default PageComponents;