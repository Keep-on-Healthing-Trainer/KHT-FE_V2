import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import Footer from "../../../components/Footer";
import LoadingImg from "../../../assets/images/LoadingImg.png";
import CommunityImg from "../../../assets/images/CommunityImg.png";
import MypageImg from "../../../assets/images/MypageImg.png";
import RankingImg from "../../../assets/images/RankingImg.png";
import SearchImg from "../../../assets/images/SearchImg.png";
import TextComponents from "./components/Text";

function LoginBeforePage() {
  const onKHT = () => {
    window.location.assign("/login");
  }

  return (
    <>
      <S.Main>
        <S.MainBlue>
          <S.TextDiv>
            <TextComponents topFont="함께 만드는 건강한" centerFont="라이프스타일" bottomFont="지금 시작하는 건강한 하루, KHT와 함께해요."/>
            <S.Button onClick={onKHT}>KHT 시작하기</S.Button>
          </S.TextDiv>
          <S.Img>
            <S.SmallImg src={LoadingImg} width="450"/> 
          </S.Img>
        </S.MainBlue>
        <S.MainWhite>
          <S.Img>
            <S.BigImg src={MypageImg} width="650"/>
          </S.Img>
          <S.TextDiv>
            <S.TopFont>측정 서비스</S.TopFont>
            <TextComponents topFont="신뢰할 수 있는" centerFont="측정 결과" bottomFont="KHT 기기를 통한 정확한 측정을 경험해보세요."/>
          </S.TextDiv>
        </S.MainWhite>
        <S.MainBlue>
          <S.TextDiv>
            <S.TopFont>랭킹 서비스</S.TopFont>
            <TextComponents topFont="빠르게 확인하는" centerFont="TOP 10" bottomFont="랭킹을 통해 서로 경쟁할 수 있어요."/>
          </S.TextDiv>
          <S.Img>
            <S.SmallImg src={RankingImg} width="450"/>
          </S.Img>
        </S.MainBlue>
        <S.MainWhite>
          <S.Img>
            <S.BigImg src={CommunityImg} width="650"/>
          </S.Img>
          <S.TextDiv>
            <S.TopFont>커뮤니티 서비스</S.TopFont>
            <TextComponents topFont="공유하는" centerFont="운동 정보" bottomFont="커뮤니티를 통해 필요한 운동 정보들을 공유하세요."/>
          </S.TextDiv>
        </S.MainWhite>
        <S.MainBlue>
          <S.TextDiv>
            <S.TopFont>트레이닝 서비스</S.TopFont>
            <TextComponents topFont="체크할 수 있는" centerFont="운동 가이드" bottomFont="운동 자세가 맞는지 확인하세요."/>
          </S.TextDiv>
          <S.Img>
            <S.BigImg src={SearchImg} width="650"/>
          </S.Img>
        </S.MainBlue>
      </S.Main>
      <Footer />
    </>
  );
}

export default LoginBeforePage;