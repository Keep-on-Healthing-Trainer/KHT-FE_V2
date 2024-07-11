import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";

import Logo from "../../../assets/icon/Logo";

const AfterHeader = () => {
  const onClickSearch = () => {
    window.location.assign("/search");
  };

  const onClickHome = () => {
    window.location.assign("/main");
  };

  return (
    <HeaderBackground>
      <div onClick={onClickHome}>
        <Logo/>
      </div>
      <Div>
        <Button onClick={onClickSearch}>검색하기</Button>
      </Div>
    </HeaderBackground>
  );
}

export const HeaderBackground = styled.header`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Div = styled.div`
  width: 200px;
  height: 6vh;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 100px;
  height: 6vh;
  background-color: ${color.White};
  border: none;
  color: ${color.Black};
  font-size: 16px;
  font-weight: 500;
  margin: 0px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export default AfterHeader;