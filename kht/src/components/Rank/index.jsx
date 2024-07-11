import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/device";
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
  width: 1000px;
  height: 6.5vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background: ${props => props.background};
  
  @media only screen and (max-width: ${breakpoints.large}) {
    width: 800px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 650px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 600px;
  }
`;

export const TextDiv = styled.div`
  width: 230px;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: ${breakpoints.large}) {
    width: 210px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 190px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 170px;
  }
`;

export const Text = styled.div`
  text-align: right;
  color: ${color.Black};
  font-size: 18px;
  font-weight: lighter;
  user-select: none;
`;

export const Ranking = styled.div`
  width: 100px;
  text-align: right;
  color: ${color.Black};
  font-size: 18px;
  font-weight: lighter;
  user-select: none;

  @media only screen and (max-width: ${breakpoints.large}) {
    width: 80px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 70px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 50px;
  }
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  margin: 0px 70px;
`;

export default Rank;