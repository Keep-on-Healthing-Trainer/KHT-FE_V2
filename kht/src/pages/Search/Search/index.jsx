import React, { useState, useEffect } from "react";

import * as S from "./styled";

import State from "../../../components/State";
import SearchInput from "../../../components/Input/Search";

import onSearch from "../../../apis/Search";

function SearchPage() {
  const [ searchData, setSearchData ] = useState();

  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = async () => {
    const res = await onSearch(searchData);
    if(res) {
      window.location.assign("/result");
    }
  }

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