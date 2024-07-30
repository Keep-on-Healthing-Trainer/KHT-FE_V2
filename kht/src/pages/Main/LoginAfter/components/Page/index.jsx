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
      <Textdiv>
        {props.pages == "1" ? (
          <NoColorText>Previous</NoColorText>
        ) : (
          <ColorText>Previous</ColorText>
        )}
      </Textdiv>
      <Textdiv>
        <NoColorText>{props.pages}</NoColorText>
        <NoColorText>of</NoColorText>
        <NoColorText>20</NoColorText>
      </Textdiv>
      <Textdiv>
      {props.pages == "20" ? (
        <NoColorText>Next</NoColorText>
      ) : (
        <ColorText>Next</ColorText>
      )}
      </Textdiv>
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

  &:hover {
    cursor: pointer;
  }
`

export const NoColorText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.Gray[4]};
  user-select: none;
`

export default PageComponents;