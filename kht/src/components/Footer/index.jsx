import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/device";
import { color } from "../../styles/theme";

import FooterLogo from "../../assets/icon/FooterLogo";
import AppStore from "../../assets/icon/AppStore";
import PlayStore from "../../assets/icon/PlayStore";

const Footer = () => {
  const onClickApple = () => {
    window.open("https://www.apple.com/kr/app-store/");
  };

  const onClickGoogle = () => {
    window.open("https://play.google.com/store/games?hl=ko");
  };

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
          <Button onClick={onClickApple}>
            <AppStore />
            <ButtonText>App Store</ButtonText>
          </Button>
          <Button onClick={onClickGoogle}>
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
  justify-content: space-around;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Div = styled.div`
  width: 400px;
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
  user-select: none;
`

export const Text = styled.div`
  font-size: 16px;
  font-weight: lighter;
  color: ${color.Gray[5]};
  user-select: none;
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
  width: 150px;
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