import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";
import { color } from "../../../styles/theme";

import Rank from "../../../components/Rank";
import State from "../../../components/State";
import Footer from "../../../components/Footer";

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

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="RANKING" />
          <S.Select>
            {selectData == "1" ? (
              <S.FocusBtn onClick={() => setSelectData("1")}>윗몸일으키기</S.FocusBtn>
            ) : (
              <S.Btn onClick={() => setSelectData("1")}>윗몸일으키기</S.Btn>
            )}
            {selectData == "2" ? (
              <S.FocusBtn onClick={() => setSelectData("2")}>스쿼트</S.FocusBtn>
            ) : (
              <S.Btn onClick={() => setSelectData("2")}>스쿼트</S.Btn>
            )}
            {selectData == "3" ? (
              <S.FocusBtn onClick={() => setSelectData("3")}>팔굽혀펴기</S.FocusBtn>
            ) : (
              <S.Btn onClick={() => setSelectData("3")}>팔굽혀펴기</S.Btn>
            )}
          </S.Select>
          <S.RankDiv>
            {data.RankingResponse.map((item , index) => {
                return(
                  <Rank rank={index+1} name={item.userName} count={item.totalCounts} />
                );
              }
            )}
          </S.RankDiv>
        </S.Center>
      </S.Main>
      <Footer></Footer>
    </>
  );
}

export default LoginAfterPage;