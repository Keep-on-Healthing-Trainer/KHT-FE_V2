import React, { useState, useEffect } from "react";

import * as S from "./styled";

import State from "../../../components/State";
import Footer from "../../../components/Footer";

import RankingComponents from "./components/Ranking";

import onGetRank from "../../../apis/GetRanking";

function LoginAfterPage() {
  const [ data, setData ] = useState(null);
  const [ selectData, setSelectData] = useState("1");

  useEffect(() => {
    getRanking();
  }, []);

  const onClickRanking = () => {
    window.location.assign("/info");
  }

  const getRanking = async () => {
    const res = await onGetRank();
    if(res) {
      setData(res);
    }
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="RANKING" />
          {data ? (
            <RankingComponents data={data.RankingResponse} onPress={() => onClickRanking()}/>
          ) : 
            undefined
          }
        </S.Center>
      </S.Main>
      <Footer></Footer>
    </>
  );
}

export default LoginAfterPage;