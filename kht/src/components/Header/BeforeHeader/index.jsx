import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";

import Logo from "../../../assets/icon/Logo";

const BeforeHeader = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <HeaderBackground>
      <div onClick={onClickHome}>
        <Logo/>
      </div>
      <Div>
        <Button onClick={onClickLogin}>로그인</Button>
        <Button onClick={onClickSignup}>회원가입</Button>
      </Div>
    </HeaderBackground>
  );
}

export const HeaderBackground = styled.header`
  width: 100%;
  height: 6vh;
  background-color: ${color.White};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;

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

  &:hover {
    cursor: pointer;
  }
`;

export default BeforeHeader;