import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  min-height: 90vh;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${COLORS.tertiary};
  line-height: 180%;
`;

const StyledTitle = styled.h2`
  font-size: 5rem;
  font-family: Bellefair;
  color: ${COLORS.secondary};
  line-height: normal;
  margin: 0;
`;

const StyledSubtitle = styled.h3`
  font-family: "Barlow Condensed";
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: ${COLORS.tertiary};
  text-transform: uppercase;
  letter-spacing: 2.4px;
`;

const StyledText = styled.p`
  font-size: 0.9375rem;
  font-weight: 400;
  color: ${COLORS.tertiary};
  line-height: 180%;
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
`;

export {
  StyledHomeContainer,
  StyledTextContainer,
  StyledText,
  StyledTitle,
  StyledSubtitle,
  StyledButton,
};
