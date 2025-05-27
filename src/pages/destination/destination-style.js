import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledDestinationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: aliceblue;
  text-align: center;
  background-image: url(/assets/images/destination/background-destination-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/assets/images/destination/background-destination-tablet.jpg);
  }

  @media screen and (min-width: 1020px) {
    background-image: url(/assets/images/destination/background-destination-desktop.jpg);
  }
`;

const StyledImg = styled.img`
  display: block;
  padding: 32px;
  width: 230px;
  height: 230px;
`;

const StyledTitle = styled.h3`
  font-size: 3.5rem;
  color: ${COLORS.secondary};
  margin: 0;
`;
const StyledText = styled.p`
  font-size: 0.9375rem;
  color: ${COLORS.tertiary};
  line-height: 180%;
`;

const Styledline = styled.div`
  margin: 24px;
  background-color: rgba(255, 255, 255, 0.25);
  height: 2px;
  width: 100%;
`;

const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export {
  StyledDestinationContainer,
  StyledImg,
  StyledTitle,
  StyledText,
  StyledInfoBox,
  Styledline,
};
