import { useState } from "react";
import { TECHNOLOGY_CONTENT } from "../../constants/technology-content";
import { TABS } from "../../constants/technology-tab";
import TabsTechnology from "../../components/tabs/Tabs-technology";
import {
  StyledContentContainer,
  StyledImg,
  StyledPicture,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledSubtitle,
  StyledTabWrapper,
  StyledtechnologyContainer,
  StyledText,
  StyledTitle,
} from "./technology-styles";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];
  const selectedTechnology = TECHNOLOGY_CONTENT[currentTab];

  return (
    <>
    <StyledStepContainer>
    <StyledStepNumber>03</StyledStepNumber>
    <StyledStepText>SPACE LAUNCH 101</StyledStepText>
  </StyledStepContainer>
    <StyledtechnologyContainer>
      {selectedTechnology && (
        <>
          <StyledPicture>
            <source
              srcSet={selectedTechnology.img.desktop}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={selectedTechnology.img.mobileAndTablet}
              media="(min-width: 768px)"
            />
            <source
              srcSet={selectedTechnology.img.mobileAndTablet}
              media="(min-width: 375px)"
            />
            <StyledImg src={selectedTechnology.img.mobileAndTablet} />
          </StyledPicture>
          <StyledTabWrapper>
          <TabsTechnology
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          </StyledTabWrapper>
             < StyledContentContainer>
          <StyledSubtitle>THE TERMINOLOGY…</StyledSubtitle>
          <StyledTitle>{selectedTechnology.terminology}</StyledTitle>
          <StyledText>{selectedTechnology.text}</StyledText>
          </StyledContentContainer>
        </>
      )}
    </StyledtechnologyContainer>
    </>
  );
};
export default Technology;
