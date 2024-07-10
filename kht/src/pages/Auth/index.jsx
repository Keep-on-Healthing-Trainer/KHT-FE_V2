import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import Input from "../../components/Input/Input";
import State from "../../components/State";
import Button from "../../components/Button";

function LoginPage() {

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="LOGIN" />
          <S.InputDiv>
            <Input innerText="아이디" state="text" />
            <Input innerText="비밀번호" state="password" />
          </S.InputDiv>
          <Button innerText="로그인" />
        </S.Center>
      </S.Main>
    </>
  );
}

export default LoginPage;