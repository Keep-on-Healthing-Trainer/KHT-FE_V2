import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../components/State";
import Button from "../../components/Button";

import InputComponents from "./components/Input";

function LoginPage() {
  const onClickLoginButton = () => {
    window.location.assign("/main");
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="LOGIN" />
          <InputComponents />
          <Button innerText="로그인" onClick={onClickLoginButton} />
        </S.Center>
      </S.Main>
    </>
  );
}

export default LoginPage;