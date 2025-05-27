import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledCrewContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
`;

const StyledStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  margin-bottom: 64px;
`;

const StyledStepNumber = styled.span`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: rgba(255, 255, 255, 0.25);
`;

const StyledStepText = styled.span`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2.4px;
  color: ${COLORS.tertiary};
`;

const StyledContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  font-family: Bellefair;
  font-size: 1.5rem;
  color: ${COLORS.secondary};
  margin: 0;
  text-transform: uppercase;
`;

const StyledSubtitle = styled.h3`
  font-family: Bellefair;
  font-size: 1.125rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
`;

const StyledText = styled.p`
  font-family: Barlow;
  font-size: 0.9375rem;
  color: ${COLORS.tertiary};
  line-height: 180%;
  margin-bottom: 24px;
`;

const StyledImg = styled.img`
  position: relative;
  left: 50% -50%;
  bottom: -25px;
`;

export {
  StyledCrewContainer,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledContentContainer,
  StyledTitle,
  StyledSubtitle,
  StyledText,
  StyledImg,
};
