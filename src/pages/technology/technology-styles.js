import styled from "styled-components";

const StyledtechnologyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-image: url(/assets/images/home/background-home-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/assets/images/home/background-home-tablet.jpg);
  }

  @media screen and (min-width: 1020px) {
    background-image: url(/assets/images/home/background-home-desktop.jpg);
  }
`;

export { StyledtechnologyContainer };
