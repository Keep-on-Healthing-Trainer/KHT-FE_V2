import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const Main = styled.main`
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: center;
`;

export const Center = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;
`

export const RankDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1vh;
`

export const Select = styled.div`
  width: 60vw;
  border-bottom: solid 2px ${color.Gray[3]};
  gap: 1vw;
  display: flex;
`

export const Btn = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: ${color.White};
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${color.Gray[4]};

  &:hover {
    cursor: pointer;
  }
`

export const FocusBtn = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: ${color.White};
  border: none;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 2px 0 ${color.Blue[8]};
  color: ${color.Black};

  &:hover {
    cursor: pointer;
  }
`