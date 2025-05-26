import { Link } from "react-router";
import { StyledBackGround, StyledButton, StyledHomeContainer, StyledText, StyledTextContainer, StyledTitle, } from "./home-styles";

const Home = () => {
  return <StyledHomeContainer>
  <StyledBackGround>
    <source srcSet="/assets/images/home/background-home-desktop.jpg" media="(min-width: 1024px)" />
    <source srcSet="/assets/images/home/background-home-tablet.jpg" media="(min-width: 768px)" />
    <source srcSet="/assets/images/home/background-home-mobile.jpg" media="(min-width: 360px)" />
    <img src="/assets/images/home/background-home-mobile.jpg" alt="satellite picture of the earth"/>
  </StyledBackGround>

<StyledTextContainer>
<StyledText>SO, YOU WANT TO TRAVEL TO</StyledText>
<StyledTitle>SPACE</StyledTitle>
<StyledText>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</StyledText>
</StyledTextContainer>

<Link to={"/destination"}>
<StyledButton>
  EXPLORE
</StyledButton>
</Link>
</StyledHomeContainer>
};
export default Home;
