import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../components/State";
import Button from "../../components/Button";

import InputComponents from "./components/Input";
import onLogin from "../../apis/Login";

function LoginPage() {
  const [loginData, setLoginData] = useState();

  const onClickLoginButton = async () => {
    if(loginData !== null) {
      try {
        const loginState = await onLogin(loginData);
        
        if (loginState) {
          window.location.assign("/main");
        }
      } catch (error) {
        console.log("로그인 오류");
      }
    }
  }

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="LOGIN" />
          <InputComponents onGetInText={(text) => setLoginData(text)} />
          <Button innerText="로그인" onClick={onClickLoginButton} />
        </S.Center>
      </S.Main>
    </>
  );
}

export default LoginPage;