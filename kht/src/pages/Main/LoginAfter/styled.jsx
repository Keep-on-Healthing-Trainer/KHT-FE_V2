import { styled } from "styled-components";
import { breakpoints } from "../../../styles/device";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Center = styled.article`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5vh;
`