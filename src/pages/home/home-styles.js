import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Link } from "react-router";

const StyledHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  min-height: 90vh;

  @media screen and (min-width: 768px) {
    padding-inline: 128px;
  }

  @media screen and (min-width: 1024px) {
    padding: 128px;
    display: grid;
    align-items: end;
    grid-template-rows: 250px 362px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${COLORS.tertiary};
  line-height: 180%;

  @media screen and (min-width: 1024px) {
    text-align: left;
    grid-column: 1;
    grid-row: 2;
  }
`;

const StyledTitle = styled.h2`
  font-size: 5rem;
  font-family: Bellefair;
  color: ${COLORS.secondary};
  line-height: normal;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 9rem;
  }
`;

const StyledSubtitle = styled.h3`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: ${COLORS.tertiary};
  text-transform: uppercase;
  letter-spacing: 2.4px;

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const StyledText = styled.p`
  font-size: 0.9375rem;
  font-weight: 400;
  color: ${COLORS.tertiary};
  line-height: 180%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  width: 144px;
  height: 144px;
  font-family: Bellefair;
  font-size: 1.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  border: none;
  margin: 32px;

  @media screen and (min-width: 768px) {
    width: 272px;
    height: 272px;
    font-size: 2rem;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1);
      box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  }
`;

const StyledLink = styled(Link)`
  @media screen and (min-width: 1024px) {
    grid-column: 2;
    grid-row: 2;
    align-self: end;
    justify-self: end;
  }
`;

export {
  StyledHomeContainer,
  StyledTextContainer,
  StyledText,
  StyledTitle,
  StyledSubtitle,
  StyledButton,
  StyledLink,
};
