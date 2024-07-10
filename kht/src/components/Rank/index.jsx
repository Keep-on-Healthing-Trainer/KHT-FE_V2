import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { color } from "../../styles/theme";

const Rank = (props) => {

  return (
    <Container background={props.rank == 1 ? color.Gold : (props.rank == 2 ? color.Silver : (props.rank == 3 ? color.Copper : color.White))}>
      <Ranking>{props.rank}</Ranking>
      <Profile></Profile>
      <TextDiv>
        <Text>{props.name}</Text>
      </TextDiv>
      <TextDiv>
        <Text>{props.count}개</Text>
      </TextDiv>
    </Container>
  );
}

export const Container = styled.div`
  width: 60vw;
  height: 6.5vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background: ${props => props.background};
`;

export const TextDiv = styled.div`
  width: 12vw;
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.div`
  width: 10vw;
  text-align: right;
  color: ${color.Black};
  font-size: 18px;
  font-weight: lighter;
  user-select: none;
`;

export const Ranking = styled.div`
  width: 5vw;
  text-align: right;
  color: ${color.Black};
  font-size: 18px;
  font-weight: lighter;
  user-select: none;
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  margin: 0px 70px;
`;

export default Rank;