import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import RankingComponents from "./components/Ranking";
import ChartComponents from "./components/Chart";

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
          <RankingComponents />
          <ChartComponents />
        </S.RightDiv>
      </S.Main>
    </>
  );
}

export default InfoPage;