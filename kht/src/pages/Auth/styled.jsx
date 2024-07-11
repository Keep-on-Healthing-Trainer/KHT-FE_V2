import { styled } from "styled-components";
import { breakpoints } from "../../styles/device";
import { color } from "../../styles/theme";

export const Main = styled.main`
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3vh;
`;

export const Center = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12vh;
`