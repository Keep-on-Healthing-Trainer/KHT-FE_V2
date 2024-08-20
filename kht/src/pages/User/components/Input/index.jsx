import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Input from "../../../../components/Input/Input";

const InputComponents = ( props ) => {
  const [signupData, setSignupData] = useState({
    name: "",
    phoneNumber: "",
    userId: "",
    password: "",
    passwordCheck: "",
  });

  useEffect(() => {
    props.onGetInText(signupData);
  }, [signupData]);

  const handleInputChange = (text, field) => {
    setSignupData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  return (
    <InputDiv>
        <Input
        innerText="이름"
        state="text" 
        onGetInText={(text) => handleInputChange(text, "name")}
        />
        <Input
        innerText="전화번호"
        state="text" 
        onGetInText={(text) => handleInputChange(text, "phoneNumber")}
        />
        <Input
        innerText="아이디"
        state="text" 
        onGetInText={(text) => handleInputChange(text, "userId")}
        />
        <Input
        innerText="비밀번호"
        state="password" 
        onGetInText={(text) => handleInputChange(text, "password")}
        />
        <Input
        innerText="비밀번호 확인"
        state="password" 
        onGetInText={(text) => handleInputChange(text, "passwordCheck")}
        />
    </InputDiv>
  );
}

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3vh;
`;

export default InputComponents;