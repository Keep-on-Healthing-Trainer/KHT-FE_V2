import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./styled";

import State from "../../components/State";
import Button from "../../components/Button";

import InputComponents from "./components/Input";
import onSignup from "../../apis/Signup";

function SignupPage() {
  const navigate = useNavigate();
  const [ signupData, setSignupData ] = useState();

  const onClickSignupButton = () => {
      if(signupData.name.length >= 2 && signupData.name.length <= 8) {
        if(signupData.userId.length >= 6 && signupData.userId.length <= 15) {
            if(signupData.phoneNumber.length == 11) {
                if(signupData.password == signupData.passwordCheck) {
                    if(signupData.password.length >= 8 && signupData.password.length <= 20) {
                      onSignupPost();
                    } else {
                        alert('비밀번호의 길이는 8~20자 사이여야 합니다.');
                    }
                } else {
                    alert('비밀번호 확인이 일치하지 않습니다.');
                }
            } else {
              alert('전화번호의 길이는 11자여야 합니다.');
            }
        } else {
            alert('아이디의 길이는 6~15자 사이여야 합니다.');
        }
    } else {
        alert('이름의 길이는 2~8자 사이여야 합니다.');
    }
  }

  const onSignupPost = async() => {
    const res = await onSignup(signupData);
    if(res) {
      navigate("/login");
    }
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="SIGN UP" />
          <InputComponents onGetInText={(text) => setSignupData(text)}  />
          <Button innerText="회원가입" onClick={onClickSignupButton} />
        </S.Center>
      </S.Main>
    </>
  );
}

export default SignupPage;