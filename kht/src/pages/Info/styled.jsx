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