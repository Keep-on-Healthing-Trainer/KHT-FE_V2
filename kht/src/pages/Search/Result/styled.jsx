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