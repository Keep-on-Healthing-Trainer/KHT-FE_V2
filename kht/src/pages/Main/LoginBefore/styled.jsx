import { styled } from "styled-components";
import { color } from "../../../styles/theme";
import { breakpoints } from "../../../styles/device";

export const Main = styled.main`
  width: 100%;
  padding-top: 6vh;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const MainBlue = styled.article`
  width: 100%;
  height: 94vh;
  background-color: ${color.Blue[0]};
  display: flex;
  justify-content: center;
  gap: 90px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
    height: 150vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 120vh;
  }
`;

export const MainWhite = styled.article`
  width: 100%;
  height: 94vh;
  background-color: ${color.White};
  display: flex;
  justify-content: center;
  gap: 90px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column-reverse;
    align-items: center;
    height: 150vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 120vh;
  }
`;

export const TextDiv = styled.div`
  height: 94vh;
  display: flex;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 70vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 50vh;
  }
`

export const Img = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

export const TopFont = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${color.Blue[10]};
  user-select: none;
`

export const Button = styled.button`
  width: 270px;
  height: 7vh;
  background-color: ${color.Blue[8]};
  color: ${color.White};
  font-size: 22px;
  font-weight: 600;
  border: none;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`

export const BigImg = styled.img`
  width: 600px;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 500px;
  }
`

export const SmallImg = styled.img`
  width: 450px;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 350px;
  }
`