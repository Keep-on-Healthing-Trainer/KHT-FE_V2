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