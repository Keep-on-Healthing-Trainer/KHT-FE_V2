import { styled } from "styled-components";
import { color } from "../../../styles/theme";
import { breakpoints } from "../../../styles/device";

export const Main = styled.main`
  width: 100%;
  padding-top: 6vh;
`;

export const MainBlue = styled.article`
  width: 100%;
  height: 94vh;
  background-color: ${color.Blue[0]};
  display: flex;
  justify-content: center;
`;

export const MainWhite = styled.article`
  width: 100%;
  height: 94vh;
  background-color: ${color.White};
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  width: 450px;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;
`

export const Img = styled.div`
  width: 450px;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 200px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 50px;
  }
`

export const Font = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: ${color.Black};
  user-select: none;
`

export const SmallFont = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${color.Gray[4]};
  user-select: none;
`

export const TopFont = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${color.Blue[10]};
  user-select: none;
`

export const Button = styled.button`
  width: 300px;
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