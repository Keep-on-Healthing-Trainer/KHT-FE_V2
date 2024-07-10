import { styled } from "styled-components";
import { color } from "../../styles/theme";

export const Main = styled.main`
  width: 100%;
  height: 94vh;
  gap: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.article`
  width: 15vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1vh;
`

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  border-radius: 50%;
`

export const Id = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.Black};
`

export const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${color.Black};
`

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
`

export const Ranking = styled.article`
  width: 50vw;
  height: 25vh;
  row-gap: 10vh;
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.Black};
`

export const Count = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${color.Black};
`

export const Select = styled.div`
  width: 15vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
`

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Grape = styled.article`
  width: 50vw;
  height: 40vh;
`