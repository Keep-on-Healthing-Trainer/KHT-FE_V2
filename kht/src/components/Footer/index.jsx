import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

const Footer = () => {

  return (
    <FooterBackground>
    </FooterBackground>
  );
}

export const FooterBackground = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Footer;