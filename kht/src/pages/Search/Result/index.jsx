import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import Search from "../../../components/Input/Search";
import * as S from "./styled";

function ResultPage() {
  const [selectData, setSelectData] = useState("1");

  return (
    <S.Main>
      <S.Shadow></S.Shadow>
      <Search />
      <S.Container>
        <S.Select>
          {selectData == "1" ? (
            <S.FocusBtn onClick={() => setSelectData("1")}>전체</S.FocusBtn>
              ) : (
            <S.Btn onClick={() => setSelectData("1")}>전체</S.Btn>
          )}
          {selectData == "2" ? (
            <S.FocusBtn onClick={() => setSelectData("2")}>허리</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("2")}>허리</S.Btn>
          )}
          {selectData == "3" ? (
            <S.FocusBtn onClick={() => setSelectData("3")}>복근</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("3")}>복근</S.Btn>
          )}
          {selectData == "4" ? (
            <S.FocusBtn onClick={() => setSelectData("4")}>팔</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("4")}>팔</S.Btn>
          )}
          {selectData == "5" ? (
            <S.FocusBtn onClick={() => setSelectData("5")}>허벅지</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("5")}>허벅지</S.Btn>
          )}
          {selectData == "6" ? (
            <S.FocusBtn onClick={() => setSelectData("6")}>종아리</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("6")}>종아리</S.Btn>
          )}
          {selectData == "7" ? (
            <S.FocusBtn onClick={() => setSelectData("7")}>등</S.FocusBtn>
          ) : (
            <S.Btn onClick={() => setSelectData("7")}>등</S.Btn>
          )}
        </S.Select>
        <S.Column>
          <S.Img></S.Img>
          <S.TextDiv>
            <S.BoldText>캡틴스 체어 레그 레이즈</S.BoldText>
            <S.Text>복근, 허벅지</S.Text>
            <S.Text>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</S.Text>
          </S.TextDiv>
        </S.Column>
        <S.Column>
          <S.Img></S.Img>
          <S.TextDiv>
            <S.BoldText>캡틴스 체어 레그 레이즈</S.BoldText>
            <S.Text>복근, 허벅지</S.Text>
            <S.Text>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</S.Text>
          </S.TextDiv>
        </S.Column>
        <S.Column>
          <S.Img></S.Img>
          <S.TextDiv>
            <S.BoldText>캡틴스 체어 레그 레이즈</S.BoldText>
            <S.Text>복근, 허벅지</S.Text>
            <S.Text>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</S.Text>
          </S.TextDiv>
        </S.Column>
        <S.Column>
          <S.Img></S.Img>
          <S.TextDiv>
            <S.BoldText>캡틴스 체어 레그 레이즈</S.BoldText>
            <S.Text>복근, 허벅지</S.Text>
            <S.Text>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</S.Text>
          </S.TextDiv>
        </S.Column>
        <S.Column>
          <S.Img></S.Img>
          <S.TextDiv>
            <S.BoldText>캡틴스 체어 레그 레이즈</S.BoldText>
            <S.Text>복근, 허벅지</S.Text>
            <S.Text>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</S.Text>
          </S.TextDiv>
        </S.Column>
      </S.Container>
    </S.Main>
  );
}

export default ResultPage;