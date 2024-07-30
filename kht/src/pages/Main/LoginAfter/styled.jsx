import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";

export const Main = styled.main`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Center = styled.article`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 3vh;
`