import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

import Input from "../../components/Input/Input";
import State from "../../components/State";
import Button from "../../components/Button";

function SignupPage() {

  return (
    <>
      <Main>
        <Center>
          <State innerText="SIGN UP" />
          <InputDiv>
            <Input innerText="이름" state="text" />
            <Input innerText="전화번호" state="text" />
            <Input innerText="아이디" state="text" />
            <Input innerText="비밀번호" state="password" />
            <Input innerText="비밀번호 확인" state="password" />
          </InputDiv>
          <Button innerText="회원가입" />
        </Center>
      </Main>
    </>
  );
}

export const Main = styled.main`
  width: 100vw;
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
  row-gap: 5vh;
`

export default SignupPage;