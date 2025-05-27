import { useState } from "react";
import { TECHNOLOGY_CONTENT } from "../../constants/technology-content";
import { TABS } from "../../constants/technology-tab";
import TabsTechnology from "../../components/tabs/Tabs-technology";
import { StyledImg, StyledStepContainer, StyledStepNumber, StyledStepText, StyledSubtitle, StyledtechnologyContainer, StyledText, StyledTitle } from "./technology-styles";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];
  const selectedTechnology = TECHNOLOGY_CONTENT[currentTab];
  //console.log(selectedDestination)
  return (
    <StyledtechnologyContainer>
      {selectedTechnology && (
        <>
        <StyledStepContainer>
<StyledStepNumber>03</StyledStepNumber>
<StyledStepText>SPACE LAUNCH 101</StyledStepText>

        </StyledStepContainer>
          <picture>
<source  srcSet={selectedTechnology.img.desktop} media="(min-width: 1024px)" />
<source  srcSet={selectedTechnology.img.mobileAndTablet} media="(min-width: 768px)"/>
<source  srcSet={selectedTechnology.img.mobileAndTablet} media="(min-width: 375px)"/>
<StyledImg src={selectedTechnology.img.mobileAndTablet} />

          </picture>
          <TabsTechnology
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <StyledSubtitle>THE TERMINOLOGY…</StyledSubtitle>
          <StyledTitle>{selectedTechnology.terminology}</StyledTitle>
          <StyledText>{selectedTechnology.text}</StyledText>
        </>
      )}
    </StyledtechnologyContainer>
  );
};
export default Technology;
