import { useState } from "react";
import Tabs from "../../components/tabs/Tabs";
import { DESTINATION_CONTENT } from "../../constants/destination-content";
import { TABS } from "../../constants/destination-tabs";
import {
  StyledDestinationContainer,
  StyledImg,
  StyledInfoBox,
  StyledInfoBoxText,
  StyledInfoBoxTitle,
  Styledline,
  StyledStepContainer,
  StyledStepNumber,
  StyledStepText,
  StyledText,
  StyledTitle,
} from "./destination-style";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];
  const selectedDestination = DESTINATION_CONTENT[currentTab];
  //console.log(selectedDestination)
  return (
    <StyledDestinationContainer>
      {selectedDestination && (
        <>
        <StyledStepContainer>
        <StyledStepNumber>01</StyledStepNumber>
          <StyledStepText>PICK YOUR DESTINATION</StyledStepText>
          </StyledStepContainer>

          <StyledImg
            src={selectedDestination.img}
            alt={selectedDestination.name}
          />
          <Tabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
          <StyledTitle>{selectedDestination.name}</StyledTitle>
          <StyledText>{selectedDestination.text}</StyledText>
          <Styledline></Styledline>
          <StyledInfoBox>
            <div>
              <StyledInfoBoxTitle>AVG. DISTANCE</StyledInfoBoxTitle>
              <StyledInfoBoxText>{selectedDestination.distance}</StyledInfoBoxText>
            </div>
            <div>
              <StyledInfoBoxTitle>EST. TRAVEL TIME</StyledInfoBoxTitle>
              <StyledInfoBoxText>{selectedDestination.travelTime}</StyledInfoBoxText>
            </div>
          </StyledInfoBox>
        </>
      )}
    </StyledDestinationContainer>
  );
};
export default Destination;
