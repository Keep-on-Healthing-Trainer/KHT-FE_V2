import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Input from "../../../../components/Input/Input";

const InputComponents = ( props ) => {

  return (
    <InputDiv>
        <Input innerText="이름" state="text" />
        <Input innerText="전화번호" state="text" />
        <Input innerText="아이디" state="text" />
        <Input innerText="비밀번호" state="password" />
        <Input innerText="비밀번호 확인" state="password" />
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