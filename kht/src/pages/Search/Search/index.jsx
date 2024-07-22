import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../../components/State";
import SearchInput from "../../../components/Input/Search";

function SearchPage() {
  const [searchData, setSearchData] = useState();

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="USER SEARCH" />
          <SearchInput onGetInText={(text) => setSearchData(text)}/>
        </S.Center>
      </S.Main>
    </>
  );
}

export default SearchPage;