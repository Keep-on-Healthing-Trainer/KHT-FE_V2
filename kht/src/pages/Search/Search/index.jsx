import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

import State from "../../../components/State";
import SearchInput from "../../../components/Input/Search";

import onSearch from "../../../apis/Search";

function SearchPage() {
  const navigate = useNavigate();
  const [ searchData, setSearchData ] = useState();

  const getSearch = async () => {
    const res = await onSearch(searchData);
    if(res) {
      navigate('/result', {
        state: res,
      });
    }
  }

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="USER SEARCH" />
          <SearchInput onGetInText={(text) => setSearchData(text)} onEnter={() => getSearch()} />
        </S.Center>
      </S.Main>
    </>
  );
}

export default SearchPage;