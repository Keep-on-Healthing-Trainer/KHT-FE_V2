import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/device";

const ImageComponents = ( props ) => {

  return (
    <Img>
        {props.state ? (
            <BigImg src={props.src} />
        ) : (
            <SmallImg src={props.src} />
        )}
    </Img>
  );
}

export const Img = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

export const BigImg = styled.img`
  width: 600px;
  user-select: none;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 500px;
  }
`

export const SmallImg = styled.img`
  width: 450px;
  user-select: none;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 350px;
  }
`

export default ImageComponents;