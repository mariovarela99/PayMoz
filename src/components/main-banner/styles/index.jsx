import styled from "styled-components";
import bg from "../../../assets/images/main-bg.png";

export const BannerTag = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  padding: 2em 4em;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${bg});
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  max-height: 720px;
`;
