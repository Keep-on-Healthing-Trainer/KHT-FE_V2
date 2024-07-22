import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Input from "../../../../components/Input/Input";

const InputComponents = ( props ) => {
  const [signupData, setSignupData] = useState({
    name: "",
    number: "",
    id: "",
    password: "",
    passwordCheck: "",
  });

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
        onGetInText={(text) => handleInputChange(text, "number")}
        />
        <Input
        innerText="아이디"
        state="text" 
        onGetInText={(text) => handleInputChange(text, "id")}
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