import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../../components/State";
import Footer from "../../../components/Footer";

import RankingComponents from "./components/Ranking";
import SelectComponents from "./components/Select";

function LoginAfterPage() {
  const [ selectData, setSelectData] = useState("1");

  const data = {
    "RankingResponse": [
        {
            "userName": "기혁기혁",
            "totalCounts": 200,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "좌기혁",
            "totalCounts": 110,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "전기혁",
            "totalCounts": 100,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
          "userName": "후기혁",
          "totalCounts": 200,
          "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "앞기혁",
            "totalCounts": 110,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "뒤기혁",
            "totalCounts": 100,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
          "userName": "그대 기혁이",
          "totalCounts": 200,
          "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "좌기혁",
            "totalCounts": 110,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
            "userName": "우기혁",
            "totalCounts": 100,
            "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
        {
          "userName": "그대기혁기혁기혁기혁",
          "totalCounts": 100,
          "profileImgUrl": "https://khtback.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.svg"
        },
    ]
  }

  const onClickRanking = () => {
    window.location.assign("/info");
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="RANKING" />
          <SelectComponents
          data={selectData}
          onPressOne={() => setSelectData("1")}
          onPressTwo={() => setSelectData("2")}
          onPressThr={() => setSelectData("3")}
          />
          <RankingComponents data={data.RankingResponse} onPress={() => onClickRanking()}/>
        </S.Center>
      </S.Main>
      <Footer></Footer>
    </>
  );
}

export default LoginAfterPage;