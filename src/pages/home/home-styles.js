import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledBackGround = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const StyledHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-image: url(/assets/images/home/background-home-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/assets/images/home/background-home-tablet.jpg);
  }

  @media screen and (min-width: 1020px) {
    background-image: url(/assets/images/home/background-home-desktop.jpg);
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${COLORS.tertiary};
  line-height: 180%;
`;
const StyledText = styled.p`
  font-size: 1rem;
`;

const StyledTitle = styled.h2`
  font-size: 5rem;
  color: ${COLORS.secondary};
  line-height: normal;
  margin: 0;
`;
const StyledButton = styled.button`
  display: flex;
  width: 144px;
  height: 144px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  border: none;
  margin: 32px;
`;

export {
  StyledHomeContainer,
  StyledBackGround,
  StyledTextContainer,
  StyledText,
  StyledTitle,
  StyledButton,
};
