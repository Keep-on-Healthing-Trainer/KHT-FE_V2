import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

export const Main = styled.main`
  width: 100%;
  height: 94vh;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.article`
  width: 150px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 120px;
    row-gap: 0px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 100px;
    row-gap: 0px;
  }
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
  row-gap: 50px;
`

export const Ranking = styled.article`
  width: 800px;
  height: 200px;
  background-color: red;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 600px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 500px;
  }
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
  width: 250px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
  
  background-color: blue;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 200px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 180px;
  }
`

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Grape = styled.article`
  width: 800px;
  height: 400px;
  background-color: red;

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 600px;
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 500px;
  }
`