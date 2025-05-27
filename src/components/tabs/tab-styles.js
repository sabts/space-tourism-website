import styled from "styled-components";

const StyledTab = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  font-size: 0.875rem;
  letter-spacing: 2.1px;
  //border: 1px solid pink;
  gap: 24px;
  font-size: 0.875rem;
`;

const StyledCrewTab = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ $isActive }) =>
    $isActive ? "#fff" : "rgba(255, 255, 255, 0.25)"};
  border-radius: 50%;
`;

export { StyledTab, StyledCrewTab };
