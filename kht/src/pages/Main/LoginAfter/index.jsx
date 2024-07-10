import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import State from "../../../components/State";
import Footer from "../../../components/Footer";

function LoginAfterPage() {

  return (
    <>
      <Main>
        <State innerText="RANKING" />
      </Main>
      <Footer></Footer>
    </>
  );
}

export const Main = styled.main`
  width: 100%;
  height: 94vh;

  display: flex;
  justify-content: center;
`;

export default LoginAfterPage;