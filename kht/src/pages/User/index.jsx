import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../components/State";
import Button from "../../components/Button";

import InputComponents from "./components/Input";

function SignupPage() {
  const onClickSignupButton = () => {
    window.location.assign("/login");
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="SIGN UP" />
          <InputComponents />
          <Button innerText="회원가입" onClick={onClickSignupButton} />
        </S.Center>
      </S.Main>
    </>
  );
}

export default SignupPage;