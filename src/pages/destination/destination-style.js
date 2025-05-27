import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import Tabs from "../../components/tabs/Tabs";

const StyledBackGround = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;
const StyledDestinationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: aliceblue;
  text-align: center;
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
`

const StyledInfoBox = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
border: 1px solid pink


`


export { StyledBackGround, StyledDestinationContainer, StyledImg, StyledTitle, StyledText, StyledInfoBox, Styledline};
