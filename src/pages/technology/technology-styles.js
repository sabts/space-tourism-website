import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledtechnologyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  overflow-x: clip;

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
    grid-template-columns: repeat(3, auto);
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
    padding: 40px;
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

const StyledTabWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    grid-column: 1;
  }
`;

const StyledContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    grid-column: 2;
    grid-row: 1;
    text-align: start;
    width: 491px;
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
  @media screen and (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const StyledSubtitle = styled.h3`
  font-family: Bellefair;
  font-size: 1.125rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledText = styled.p`
  text-align: center;
  font-family: Barlow;
  font-size: 0.9375rem;
  color: ${COLORS.tertiary};
  line-height: 180%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1024px) {
    text-align: start;
  }
`;

const StyledPicture = styled.picture`
  margin-bottom: 32px;

  @media screen and (min-width: 1024px) {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    position: relative;
    left: 200px;
  }
`;

const StyledImg = styled.img`
  min-width: 379px;
  height: auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    min-width: 770px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 603px;
    min-height: 729px;
  }
`;

export {
  StyledtechnologyContainer,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledTabWrapper,
  StyledContentContainer,
  StyledTitle,
  StyledSubtitle,
  StyledText,
  StyledPicture,
  StyledImg,
};
