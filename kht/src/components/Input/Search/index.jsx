import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../../styles/theme";
import SearchIcon from "../../../assets/icon/SearchIcon";

const SearchInput = (props) => {

  return (
    <Container>
        <DataInput type={props.state} maxLength={15} placeholder="찾고싶은 유저를 입력하세요"/>
        <SearchIcon />
    </Container>
  );
}

export const Container = styled.div`
  width: 42vw;
  height: 6.5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid 1px ${color.Blue[10]};
  border-radius: 50px;
`;

export const DataInput = styled.input`
  width: 35vw;
  height: 6vh;
  border: none;
  border-radius: 50px;

  font-size: 16px;
  color: ${color.Blue[10]};
  padding: 0px 10px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default SearchInput;