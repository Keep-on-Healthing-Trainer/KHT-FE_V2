import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../../../components/Input/Search";
import * as S from "./styled";

import NoDataComponents from "./components/NoData";
import DataComponents from "./components/Data";

function ResultPage() {
  const [isData, setIsData] = useState(false);
  const [searchData, setSearchData] = useState();

  const onClickButton = () => {
    window.location.assign("/main");
  }

  const onClickData = () => {
    window.location.assign("/info");
  }

  return (
    <S.Main>
      <S.Shadow></S.Shadow>
      <Search onGetInText={(text) => setSearchData(text)} />
      {isData ? (
        <S.Container>
          <DataComponents onPress={() => onClickData()} />
        </S.Container>
      ) : (
        <S.Container>
          <NoDataComponents onPress={() => onClickButton()}/>
        </S.Container>
      )}
    </S.Main>
  );
}

export default ResultPage;