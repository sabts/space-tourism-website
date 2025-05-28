import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledTabContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-self: stretch;
  padding: 0;
  gap: 24px;
`;

const StyledDestinationTab = styled.li`
  list-style: none;
  font-size: 0.875rem;
  letter-spacing: 2.1px;
  font-family: "Barlow Condensed";
  font-size: 0.875rem;
  color: ${({ $isActive }) =>
    $isActive ? COLORS.secondary : "rgba(255, 255, 255, 0.25)"};
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? COLORS.secondary : "transparent")};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledCrewTab = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ $isActive }) =>
    $isActive ? COLORS.secondary : "rgba(255, 255, 255, 0.25)"};
  border-radius: 50%;
`;

const StyledTechnologyTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Bellefair;
  font-size: 1.125rem;
  width: 40px;
  height: 40px;
  background-color: ${({ $isActive }) =>
    $isActive ? COLORS.secondary : "transparent"};
  border-radius: 50%;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? COLORS.secondary : "rgba(255, 255, 255, 0.25)"};
  color: ${({ $isActive }) => ($isActive ? COLORS.primary : COLORS.secondary)};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
  }
`;
export {
  StyledTabContainer,
  StyledDestinationTab,
  StyledCrewTab,
  StyledTechnologyTab,
};
