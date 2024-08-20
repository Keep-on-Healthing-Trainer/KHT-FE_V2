import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Rank from "../../../../../components/Rank";

const RankingComponents = ( props ) => {

  return (
    <RankDiv>
        {props.data.map((item , index) => {
          console.log(item.profileImgUrl);
            return(
              <Rank key={index} rank={index+1} name={item.userName} count={item.totalCounts} onClick={props.onPress} path={item.profileImgUrl} />
            );
        }
        )}
  </RankDiv>
  );
}

export const RankDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1vh;
`

export default RankingComponents;