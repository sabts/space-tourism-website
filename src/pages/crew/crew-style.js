import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledCrewContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-inline: 40px;
    gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    justify-self: center;
    padding-inline: 120px;
    text-align: left;
    align-self: center;
    grid-row: 2;
    grid-column: 2;
  }
`;

const StyledStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    justify-self: start;
    align-self: start;
  }

  @media screen and (min-width: 1020px) {
    margin-bottom: 60px;
    grid-row: 1;
    grid-column: 1;
  }
`;

const StyledStepNumber = styled.span`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: rgba(255, 255, 255, 0.25);

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const StyledStepText = styled.span`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2.4px;
  color: ${COLORS.secondary};

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const StyledContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-inline: 70px;
    gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding-inline: 0px;
    text-align: left;
    align-self: start;
    grid-row: 2;
    grid-column: 1;
  }
`;

const StyledTitle = styled.h2`
  font-family: Bellefair;
  font-size: 1.5rem;
  color: ${COLORS.secondary};
  margin: 0;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StyledSubtitle = styled.h3`
  font-family: Bellefair;
  font-size: 1.125rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledText = styled.p`
  font-family: Barlow;
  font-size: 0.9375rem;
  color: ${COLORS.tertiary};
  line-height: 180%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  position: relative;
  left: 50% -50%;
  bottom: -25px;

  @media screen and (min-width: 768px) {
    bottom: -24px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    display: block;
    grid-row: 2;
    grid-column: 2;
  }
`;

const StyledTab = styled.div`
  @media screen and (min-width: 1024px) {
    grid-row: 3;
    grid-column: 1;
    align-self: start;
  }
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
  StyledTab,
};
