import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

import Search from "../../../components/Input/Search";
import * as S from "./styled";

import NoDataComponents from "./components/NoData";
import DataComponents from "./components/Data";

import onSearch from "../../../apis/Search";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isData, setIsData] = useState(false);
  const [searchData, setSearchData] = useState();
  const data = location.state; 

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setIsData(true);
    }
  }, [])

  const getSearch = async () => {
    const res = await onSearch(searchData);
    if(res) {
      navigate('/result', {
        state: res,
      });
    }
  }

  const onClickButton = () => {
    navigate('/main');
  }

  const onClickData = (item) => {
    navigate('/info', {
      state: item,
    });
  }

  return (
    <S.Main>
      <S.Shadow></S.Shadow>
      <Search onGetInText={(text) => setSearchData(text)} onEnter={() => getSearch()} />
      {isData ? (
        <S.Container>
          {data.map((item, index) => {
            return (
                <DataComponents onPress={() => onClickData(item)} userId={item.userId} name={item.name} phoneNumber={item.phoneNumber} path={item.profileImgeUrl} />
            );
          })}
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