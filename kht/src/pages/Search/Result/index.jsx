import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../../../components/Input/Search";
import NoDataIcon from "../../../assets/icon/NoDataIcon";
import * as S from "./styled";

function ResultPage() {
  const [isData, setIsData] = useState(false);

  const onClickButton = () => {
    window.location.assign("/main");
  }

  return (
    <S.Main>
      <S.Shadow></S.Shadow>
      <Search />
      {isData ? (
              <S.Container>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
              <S.Column>
                <S.Img></S.Img>
                <S.TextDiv>
                  <S.BoldText>유저 이름</S.BoldText>
                  <S.Text>아이디</S.Text>
                  <S.Text>전화번호</S.Text>
                </S.TextDiv>
              </S.Column>
            </S.Container>
      ) : (
        <S.Container>
          <S.NoDataDiv>
            <NoDataIcon />
            <S.NoDataText>유저를 찾을 수 없습니다.</S.NoDataText>
            <S.Btn onClick={() => onClickButton()}>메인 페이지로 돌아가기</S.Btn>
          </S.NoDataDiv>
        </S.Container>
      )}
    </S.Main>
  );
}

export default ResultPage;