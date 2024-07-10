import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

import FooterLogo from "../../assets/icon/FooterLogo";
import AppStore from "../../assets/icon/AppStore";
import PlayStore from "../../assets/icon/PlayStore";

const Footer = () => {

  return (
    <FooterBackground>
      <Div>
        <FooterLogo />
        <TextContainer>
          <TextDiv>
            <TextLable>Email</TextLable>
            <TextLable>Address</TextLable>
          </TextDiv>
          <TextDiv>
            <Text>NoNamed@dsm.hs.kr</Text>
            <Text>대전광역시 유성구 가정북로 76</Text>
          </TextDiv>
        </TextContainer>
      </Div>
      <Div>
        <TextLable>KHT 앱 다운로드</TextLable>
        <TextContainer>
          <Button>
            <AppStore />
            <ButtonText>App Store</ButtonText>
          </Button>
          <Button>
            <PlayStore />
            <ButtonText>Google Play</ButtonText>
          </Button>
        </TextContainer>
      </Div>
    </FooterBackground>
  );
}

export const FooterBackground = styled.footer`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20vw;
`;

export const Div = styled.div`
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2vh;
`;

export const TextLable = styled.div`
  font-size: 16px;
  font-weight: lighter;
  color: ${color.Black};
`

export const Text = styled.div`
  font-size: 16px;
  font-weight: lighter;
  color: ${color.Gray[5]};
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
`

export const TextContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

export const Button = styled.button`
  background-color: ${color.Blue[8]};
  width: 8vw;
  height: 4vh;
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${color.White};
`;

export default Footer;