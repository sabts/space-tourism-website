import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { NavLink } from "react-router";

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
`

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledMenuContentContainer = styled.ul`
  position: absolute;
  left: 121px;
  display: flex;
  width: 254px;
  height: 107%;
  padding-top: 1rem;
  padding-left: 32px;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  text-transform: uppercase;
  background: transparent;
  //background: rgba(11, 13, 23, 0.15);
  backdrop-filter: blur(40px);
  overflow-x: clip;
  transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in;
`;

const StyledMenuContent = styled(NavLink)`
  display: block;
color: ${COLORS.secondary};
font-size: 1rem;
position: relative;
width: 219px;

&:active::before  {
    content: "";
    position: absolute;
    left: 100%;
    width: 3px;
    height: 20px;
    background-color: ${COLORS.secondary};
  }
`
export {
  StyledMenuContainer,
  StyledImgContainer,
  StyledImg,
  StyledMenuContentContainer, StyledMenuContent
};
