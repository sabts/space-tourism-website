import { Link } from "react-router";
import {
  StyledButton,
  StyledHomeContainer,
  StyledLink,
  StyledSubtitle,
  StyledText,
  StyledTextContainer,
  StyledTitle,
} from "./home-styles";

const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledTextContainer>
        <StyledSubtitle>SO, YOU WANT TO TRAVEL TO</StyledSubtitle>
        <StyledTitle>SPACE</StyledTitle>
        <StyledText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </StyledText>
      </StyledTextContainer>

      <StyledLink to={"/destination"}>
        <StyledButton>EXPLORE</StyledButton>
      </StyledLink>
    </StyledHomeContainer>
  );
};
export default Home;
