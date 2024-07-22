import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../../../styles/theme";
import { breakpoints } from "../../../../styles/device";

const ChartComponents = ( props ) => {

  return (
    <Grape>
        <Text>그래프</Text>
    </Grape>
  );
}

export const Grape = styled.article`
  width: 800px;
  height: 400px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 600px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 500px;
  }
`

export const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${color.Black};
`

export default ChartComponents;