import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import Input from "../../components/Input/Input";
import State from "../../components/State";
import Button from "../../components/Button";

function SignupPage() {

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="SIGN UP" />
          <S.InputDiv>
            <Input innerText="이름" state="text" />
            <Input innerText="전화번호" state="text" />
            <Input innerText="아이디" state="text" />
            <Input innerText="비밀번호" state="password" />
            <Input innerText="비밀번호 확인" state="password" />
          </S.InputDiv>
          <Button innerText="회원가입" />
        </S.Center>
      </S.Main>
    </>
  );
}

export default SignupPage;