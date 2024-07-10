import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

import Input from "../../components/Input/Input";
import State from "../../components/State";
import Button from "../../components/Button";

function LoginPage() {

  return (
    <>
      <Main>
        <Center>
          <State innerText="LOGIN" />
          <InputDiv>
            <Input innerText="아이디" state="text" />
            <Input innerText="비밀번호" state="password" />
          </InputDiv>
          <Button innerText="로그인" />
        </Center>
      </Main>
    </>
  );
}

export const Main = styled.main`
  width: 100%;
  height: 94vh;

  display: flex;
  justify-content: center;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 3vh;
`;

export const Center = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12vh;
`

export default LoginPage;