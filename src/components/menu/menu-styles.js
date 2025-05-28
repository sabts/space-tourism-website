import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { NavLink } from "react-router";

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    padding-top: 40px;
  }
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
  position: absolute;
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
    background: rgba(255, 255, 255, 0.05);
    flex-direction: row;
    translate: 0;
    top: 0;
    padding: 0;
    padding-inline: 40px;
    height: 96px;
    min-width: 85%;
    align-self: stretch;
    justify-content: flex-end;
    align-items: center;
    overflow-x: visible;
  }

  @media screen and (min-width: 1024px) {
    background: rgba(255, 255, 255, 0.05);
    min-width: 60%;
    margin-top: 40px;

    &::before {
      content: "";
      height: 1px;
      width: 70%;
      position: absolute;
      left: -50%;
      top: 50%;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const StyledMenuContent = styled(NavLink)`
  display: block;
  font-family: "Barlow Condensed";
  color: ${COLORS.secondary};
  font-size: 1rem;
  position: relative;
  width: 219px;

  &.active::before {
    content: "";
    position: absolute;
    left: 100%;
    width: 3px;
    height: 20px;
    background-color: ${COLORS.secondary};
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: auto;

    &.active::before {
      content: "";
      position: absolute;
      top: 285%;
      left: 0%;
      width: 100%;
      height: 3px;
      background-color: ${COLORS.secondary};
    }
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
