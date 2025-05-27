import styled from "styled-components";

const StyledPageContainer = styled.section`
  background-image: url(${(props) => props.$background.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.$background.tablet});
  }

  @media screen and (min-width: 1020px) {
    background-image: url(${(props) => props.$background.desktop});
  }
`;

export {StyledPageContainer}