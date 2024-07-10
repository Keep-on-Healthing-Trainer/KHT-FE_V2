import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

function InfoPage() {

  return (
    <>
      <S.Main>
        <S.Profile>
          <S.ProfileImg></S.ProfileImg>
          <S.Id>TESTTEST</S.Id>
          <S.Text>이기혁</S.Text>
        </S.Profile>
        <S.RightDiv>
          <S.Ranking>
            <S.Text>내 랭킹</S.Text>
            <S.SelectDiv>
              <S.Select>
                <S.Label>윗몸일으키기</S.Label>
                <S.Count>120위</S.Count>
              </S.Select>
              <S.Select>
                <S.Label>스쿼트</S.Label>
                <S.Count>1234위</S.Count>
              </S.Select>
              <S.Select>
                <S.Label>팔굽혀펴기</S.Label>
                <S.Count>654위</S.Count>
              </S.Select>
            </S.SelectDiv>
          </S.Ranking>
          <S.Grape>
            <S.Text>내 그래프</S.Text>
          </S.Grape>
        </S.RightDiv>
      </S.Main>
    </>
  );
}

export default InfoPage;