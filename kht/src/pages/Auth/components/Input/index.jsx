import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Input from "../../../../components/Input/Input";

const InputComponents = ( props ) => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (text, field) => {
    setLoginData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  return (
    <InputDiv>
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