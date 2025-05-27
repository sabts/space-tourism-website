import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledDestinationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: ${COLORS.tertiary};
  text-align: center;
`;

const StyledStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  margin-bottom: 40px;
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
  color: ${COLORS.secondary};
`;

const StyledImg = styled.img`
  display: block;
  padding: 32px;
  width: 230px;
  height: 230px;
`;

const StyledTitle = styled.h2`
  font-family: Bellefair;
  font-size: 3.5rem;
  color: ${COLORS.secondary};
  margin: 0;
`;

const StyledText = styled.p`
  font-family: Barlow;
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

const StyledInfoBoxTitle = styled.h5`
  text-align: center;
  font-family: "Barlow Condensed";
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${COLORS.tertiary};
  margin: 8px;
`;

const StyledInfoBoxText = styled.p`
  text-align: center;
  font-family: Bellefair;
  font-size: 1.75rem;
  color: ${COLORS.secondary};
  margin: 0;
`;

export {
  StyledDestinationContainer,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledImg,
  StyledTitle,
  StyledText,
  StyledInfoBox,
  Styledline,
  StyledInfoBoxTitle,
  StyledInfoBoxText,
};
