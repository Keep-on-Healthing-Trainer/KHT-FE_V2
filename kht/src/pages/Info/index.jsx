import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

import * as S from "./styled";

import RankingComponents from "./components/Ranking";

function InfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <S.Main>
        <S.Profile>
          <S.ProfileImg>
            <S.ProfileImgSrc src={data.profileImgUrl} />
          </S.ProfileImg>
          <S.Text>{data.name}</S.Text>
          <S.Id>{data.userId}</S.Id>
        </S.Profile>
        <S.RightDiv>
          <RankingComponents
          situp={data.sitUpCounts == null ? 0 : data.sitUpCounts}
          pushup={data.pushUpCounts == null ? 0 : data.pushUpCounts}
          squat={data.squatCounts == null ? 0 : data.squatCounts}
          />
        </S.RightDiv>
      </S.Main>
    </>
  );
}

export default InfoPage;