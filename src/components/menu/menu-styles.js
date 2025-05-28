import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { NavLink } from "react-router";

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledMenuContentContainer = styled.ul`
  position: fixed;
  top: 15px;
  right: 0;
  display: flex;
  width: 254px;
  height: 107%;
  padding-top: 7rem;
  padding-left: 32px;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  text-transform: uppercase;
  z-index: 1;
  backdrop-filter: blur(40px);
  overflow-x: clip;
  translate: ${({ $isOpen }) => ($isOpen ? "0" : "100%")};
  transition: translate 0.3s ease-in;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    translate: 0;
    top: 0;
    padding: 0;
    align-self: stretch;
  }
`;

const StyledMenuContent = styled(NavLink)`
  display: block;
  font-family: "Barlow Condensed";
  color: ${COLORS.secondary};
  font-size: 1rem;
  position: relative;
  width: 219px;

  &:active::before {
    content: "";
    position: absolute;
    left: 100%;
    width: 3px;
    height: 20px;
    background-color: ${COLORS.secondary};
  }
`;

const StyledMenuElement = styled.div`
  display: flex;
  gap: 12px;
  letter-spacing: 2.7px;
`;

const StyledIndex = styled.span`
  font-family: "Barlow Condensed";
  font-weight: 700;
`;

const StyledIndexName = styled.span`
  font-family: "Barlow Condensed";
  font-weight: 700;
`;

export {
  StyledMenuContainer,
  StyledImgContainer,
  StyledImg,
  StyledMenuContentContainer,
  StyledMenuContent,
  StyledMenuElement,
  StyledIndex,
  StyledIndexName,
};
