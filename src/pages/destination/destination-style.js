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

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-inline: 40px;
    gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding: 48px;
    display: grid;
    align-items: center;
    justify-content: start;
    grid-template-rows: auto, 1fr, 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
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

const StyledImg = styled.img`
  display: block;
  padding: 32px;
  width: 230px;
  height: 230px;

  @media screen and (min-width: 768px) {
    width: 457px;
    height: 457px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 1;
  }
`;

const StyledContentContainer = styled.section`
  @media screen and (min-width: 768px) {
    padding-inline: 40px;
  }

  @media screen and (min-width: 1024px) {
    justify-self: center;
    padding-inline: 150px;
    text-align: left;
    align-self: center;
    grid-row: 2;
    grid-column: 2;
  }
`;

const StyledTitle = styled.h2`
  font-family: Bellefair;
  font-size: 3.5rem;
  color: ${COLORS.secondary};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
`;

const StyledText = styled.p`
  font-family: Barlow;
  font-size: 0.9375rem;
  color: ${COLORS.tertiary};
  line-height: 180%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Styledline = styled.div`
  margin: 24px;
  background-color: rgba(255, 255, 255, 0.25);
  height: 2px;
  width: 100%;

  @media screen and (min-width: 1020px) {
    align-self: start;
    margin-bottom: 40px;
  }
`;

const StyledInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-self: center;
    gap: 40px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
  }
`;

const StyledBoxInfo = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    justify-items: start;
    align-items: start;
  }
`;

const StyledInfoBoxTitle = styled.h5`
  text-align: center;
  font-family: "Barlow Condensed";
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${COLORS.tertiary};
  margin: 8px;

  @media screen and (min-width: 1024px) {
    text-align: start;
    align-self: start;
    width: 130px;
  }
`;

const StyledInfoBoxText = styled.p`
  text-align: center;
  font-family: Bellefair;
  font-size: 1.75rem;
  color: ${COLORS.secondary};
  margin: 0;

  @media screen and (min-width: 1024px) {
    text-align: start;
    justify-self: start;
    align-self: start;
    width: 150px;
  }
`;

export {
  StyledDestinationContainer,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledImg,
  StyledContentContainer,
  StyledTitle,
  StyledText,
  StyledInfoBoxContainer,
  Styledline,
  StyledInfoBoxTitle,
  StyledInfoBoxText,
  StyledBoxInfo,
};
