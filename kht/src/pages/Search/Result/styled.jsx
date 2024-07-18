import { styled } from "styled-components";
import { color } from "../../../styles/theme";
import { breakpoints } from "../../../styles/device";

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 30px;
  padding: 150px 0px 0px 0px;
`;

export const Select = styled.div`
  width: 1000px;
  border-bottom: solid 2px ${color.Gray[2]};
  gap: 1vw;
  display: flex;
`

export const Btn = styled.button`
  width: 70px;
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
  width: 70px;
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

export const Container = styled.div`
  width: 1000px;
`

export const Column = styled.div`
  width: 1000px;
  display: flex;
  border-bottom: solid 1px ${color.Gray[2]};
  padding: 20px 0px;
  gap: 30px;
`

export const Img = styled.div`
  width: 100px;
  height: 110px;
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const BoldText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${color.Black};
`

export const Text = styled.div`
  width: 450px;
  font-size: 14px;
  font-weight: 500;
  color: ${color.Gray[5]};
`

export const Shadow = styled.div`
  position: fixed;
  width: 100%;
  height: 300px;
  bottom: 0px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${color.White} 100%);

`