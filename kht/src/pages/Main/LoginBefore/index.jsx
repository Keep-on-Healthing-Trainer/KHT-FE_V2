import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./styled";

import Footer from "../../../components/Footer";
import LoadingImg from "../../../assets/images/LoadingImg.png";
import CommunityImg from "../../../assets/images/CommunityImg.png";
import MypageImg from "../../../assets/images/MypageImg.png";
import RankingImg from "../../../assets/images/RankingImg.png";
import SearchImg from "../../../assets/images/SearchImg.png";

import TextComponents from "./components/Text";
import ImageComponents from "./components/Image";

function LoginBeforePage() {
  const navigate = useNavigate();

  const onKHT = () => {
    navigate("/login");
  }

  return (
    <>
      <S.Main>
        <S.MainBlue>
          <TextComponents
          topFont="함께 만드는 건강한"
          centerFont="라이프스타일"
          bottomFont="지금 시작하는 건강한 하루, KHT와 함께해요."
          buttonState={true}
          onPress={() => onKHT()}
          />
          <ImageComponents 
          src={LoadingImg}
          state={false}
          />
        </S.MainBlue>
        <S.MainWhite>
          <ImageComponents 
          src={MypageImg}
          state={true}
          />
          <TextComponents
          topFont="신뢰할 수 있는"
          centerFont="측정 결과"
          bottomFont="KHT 기기를 통한 정확한 측정을 경험해보세요."
          buttonState={false}
          text="측정 서비스"
          />
        </S.MainWhite>
        <S.MainBlue>
          <TextComponents
          topFont="빠르게 확인하는"
          centerFont="TOP 10"
          bottomFont="랭킹을 통해 서로 경쟁할 수 있어요."
          buttonState={false}
          text="랭킹 서비스"
          />
          <ImageComponents 
          src={RankingImg}
          state={false}
          />
        </S.MainBlue>
        <S.MainWhite>
          <ImageComponents 
          src={CommunityImg}
          state={true}
          />
          <TextComponents
          topFont="공유하는"
          centerFont="운동 정보"
          bottomFont="커뮤니티를 통해 필요한 운동 정보들을 공유하세요."
          buttonState={false}
          text="커뮤니티 서비스"
          />
        </S.MainWhite>
        <S.MainBlue>
          <TextComponents
          topFont="체크할 수 있는"
          centerFont="운동 가이드"
          bottomFont="운동 자세가 맞는지 확인하세요."
          buttonState={false}
          text="트레이닝 서비스"
          />
          <ImageComponents 
          src={SearchImg}
          state={true}
          />
        </S.MainBlue>
      </S.Main>
      <Footer />
    </>
  );
}

export default LoginBeforePage;