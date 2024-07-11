import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";

const Input = (props) => {

  return (
    <Container>
        <Text>{props.innerText}</Text>
        <DataInput type={props.state} maxLength={15} />
    </Container>
  );
}

export const Container = styled.div`
  width: 750px;
  height: 10vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 550px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${color.Black};
  margin-bottom: 10px;
  user-select: none;
`;

export const DataInput = styled.input`
  width: 750px;
  height: 6vh;
  background-color: ${color.Gray[1]};
  border-radius: 10px;
  border: none;

  font-size: 16px;
  color: ${color.Black};
  padding: 0px 10px;

  &:focus {
    border: none;
    outline: none;
  }

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 550px;
  }
`;

export default Input;