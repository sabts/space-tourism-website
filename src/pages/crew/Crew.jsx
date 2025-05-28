import { useState } from "react";
import { CREW_CONTENT } from "../../constants/crew-content";
import Tabs from "../../components/tabs/Tabs";
import { StyledContentContainer, StyledCrewContainer, StyledImg, StyledStepContainer, StyledStepNumber, StyledStepText, StyledSubtitle, StyledTab, StyledText, StyledTitle } from "./crew-style";
import { TABS } from "../../constants/crew-tabs";
import TabsCrew from "../../components/tabs/Tabs-crew";

const Crew = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];
  const selectedCrew = CREW_CONTENT[currentTab];

  return (
    <StyledCrewContainer>
      {selectedCrew && (
        <>
        <StyledStepContainer>
          <StyledStepNumber>02</StyledStepNumber>
          <StyledStepText>MEET YOUR CREW</StyledStepText>
        </StyledStepContainer>
        <StyledContentContainer>
        <div>
          <StyledSubtitle>{selectedCrew.title}</StyledSubtitle>
          <StyledTitle>{selectedCrew.name}</StyledTitle>
          </div>
          <StyledText>{selectedCrew.text}</StyledText>
          <StyledTab>
          <TabsCrew
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          </StyledTab>
          </StyledContentContainer>
          <StyledImg src={selectedCrew.img} alt={selectedCrew.name} />
          </>
      )}
    </StyledCrewContainer>
  );
};
export default Crew;
