import { styled } from "styled-components";
import { color } from "../../../styles/theme";

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

export const Left = styled.div`
  width: 30%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;
`

export const Right = styled.div`
  width: 30%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;
`

export const Font = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: ${color.Black};
`

export const SmallFont = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${color.Gray[4]};
`

export const TopFont = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${color.Blue[10]};
`

export const Button = styled.button`
  width: 15vw;
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