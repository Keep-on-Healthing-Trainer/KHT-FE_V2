import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";
import SearchIcon from "../../../assets/icon/SearchIcon";

const SearchInput = (props) => {
  const [value, setValue] = useState();

  const onChangeData = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    props.onGetInText(value);
  }, [value]);

  return (
    <Container>
        <DataInput
        type="text"
        placeholder="찾고싶은 유저를 입력하세요"
        onChange={onChangeData}
        />
        <SearchIcon />
    </Container>
  );
}

export const Container = styled.div`
  width: 750px;
  height: 6.5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid 1px ${color.Blue[10]};
  border-radius: 50px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 550px;
  }
`;

export const DataInput = styled.input`
  width: 650px;
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

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 550px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 450px;
  }
`;

export default SearchInput;