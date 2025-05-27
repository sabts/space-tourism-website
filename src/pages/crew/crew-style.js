import styled from "styled-components";

const StyledCrewContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: aliceblue;
  text-align: center;
  background-image: url(/assets/images/crew/background-crew-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/assets/images/crew/background-crew-tablet.jpg);
  }

  @media screen and (min-width: 1020px) {
    background-image: url(/assets/images/crew/background-crew-desktop.jpg);
  }
`;

export { StyledCrewContainer };
