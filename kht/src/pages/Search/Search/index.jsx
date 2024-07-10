import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

import State from "../../../components/State";
import SearchInput from "../../../components/Input/Search";

function SearchPage() {

  return (
    <>
      <S.Main>
        <S.Center>
          <State innerText="USER SEARCH" />
          <SearchInput />
        </S.Center>
      </S.Main>
    </>
  );
}

export default SearchPage;