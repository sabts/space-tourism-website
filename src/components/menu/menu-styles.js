import styled from "styled-components";

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
`;

const StyledMenuContentContainer = styled.ul`
  position: absolute;
  left: 121px;
  display: flex;
  width: 254px;
  height: 880px;
  padding-top: 1rem;
  padding-left: 32px;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  text-transform: uppercase;
  background: rgba(11, 13, 23, 0.15);
  backdrop-filter: blur(40px);
  overflow-x: clip;
  transition: width 0.3s ease-in-out;
`;
export {
  StyledMenuContainer,
  StyledImgContainer,
  StyledImg,
  StyledMenuContentContainer,
};
