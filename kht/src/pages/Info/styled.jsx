import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

export const Main = styled.main`
  width: 100%;
  height: 94vh;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.article`
  width: 1000px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px ${color.Gray[2]};

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
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const ProfileImgSrc = styled.img`
  width: 150px;
  height: 150px;
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
  width: 1000px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
`