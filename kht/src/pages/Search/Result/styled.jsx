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
  padding: 70px 0px;
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 750px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 600px;
  }
`

export const Column = styled.div`
  width: 800px;
  display: flex;
  border-bottom: solid 1px ${color.Gray[2]};
  padding: 20px 100px;
  gap: 30px;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 600px;
  }
`

export const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${color.Gray[2]};
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
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`

export const NoDataText = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: ${color.Gray[4]};
`

export const Btn = styled.button`
  width: 280px;
  height: 60px;
  background-color: ${color.Blue[8]};
  border: none;
  color: ${color.White};
  font-size: 18px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const NoDataDiv = styled.div`
  height: 60vh;
  row-gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`