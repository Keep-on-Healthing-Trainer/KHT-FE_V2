import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { breakpoints } from "../../../../styles/device";
import { color } from "../../../../styles/theme";

const RankingComponents = ( props ) => {

  return (
    <Ranking>
        <Text>횟수</Text>
        <SelectDiv>
            <Select>
                <Label>윗몸일으키기</Label>
                <Count>{props.situp}회</Count>
            </Select>
            <Select>
                <Label>스쿼트</Label>
                <Count>{props.squat}회</Count>
            </Select>
            <Select>
                <Label>팔굽혀펴기</Label>
                <Count>{props.pushup}회</Count>
            </Select>
        </SelectDiv>
    </Ranking>
  );
}

export const Ranking = styled.article`
  width: 800px;
  height: 200px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 600px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 500px;
  }
`

export const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${color.Black};
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.Black};
`

export const Count = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${color.Black};
`

export const Select = styled.div`
  width: 250px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 200px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 180px;
  }
`

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default RankingComponents;