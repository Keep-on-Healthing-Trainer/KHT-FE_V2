import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import Footer from "../../../components/Footer";

function LoginBeforePage() {

  return (
    <>
      <S.Main>
        <S.MainBlue>
          <S.Text>
            <div>
              <S.Font>함께 만드는 건강한</S.Font>
              <S.Font>라이프스타일</S.Font>
            </div>
            <S.SmallFont>지금 시작하는 건강한 하루, KHT와 함께해요.</S.SmallFont>
            <S.Button>KHT 시작하기</S.Button>
          </S.Text>
          <S.Img>

          </S.Img>
        </S.MainBlue>
        <S.MainWhite>
          <S.Img>

          </S.Img>
          <S.Text>
            <S.TopFont>측정 서비스</S.TopFont>
            <div>
              <S.Font>신뢰할 수 있는</S.Font>
              <S.Font>측정 결과</S.Font>
            </div>
            <S.SmallFont>KHT 기기를 통한 정확한 측정을 경험해보세요.</S.SmallFont>
          </S.Text>
        </S.MainWhite>
        <S.MainBlue>
          <S.Text>
            <S.TopFont>랭킹 서비스</S.TopFont>
            <div>
              <S.Font>빠르게 확인하는</S.Font>
              <S.Font>TOP 10</S.Font>
            </div>
            <S.SmallFont>랭킹을 통해 서로 경쟁할 수 있어요.</S.SmallFont>
          </S.Text>
          <S.Img>

          </S.Img>
        </S.MainBlue>
        <S.MainWhite>
          <S.Img>

          </S.Img>
          <S.Text>
            <S.TopFont>커뮤니티 서비스</S.TopFont>
            <div>
              <S.Font>공유하는</S.Font>
              <S.Font>운동 정보</S.Font>
            </div>
            <S.SmallFont>커뮤니티를 통해 운동 정보들을 공유하세요.</S.SmallFont>
          </S.Text>
        </S.MainWhite>
        <S.MainBlue>
          <S.Text>
            <S.TopFont>트레이닝 서비스</S.TopFont>
            <div>
              <S.Font>체크할 수 있는</S.Font>
              <S.Font>운동 가이드</S.Font>
            </div>
            <S.SmallFont>운동 자세가 맞는지 확인하세요.</S.SmallFont>
          </S.Text>
          <S.Img>
            
          </S.Img>
        </S.MainBlue>
      </S.Main>
      <Footer />
    </>
  );
}

export default LoginBeforePage;