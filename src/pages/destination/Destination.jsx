import { useState } from "react";
import Tabs from "../../components/tabs/Tabs";
import { DESTINATION_CONTENT } from "../../constants/destination-content";
import { TABS } from "../../constants/destination-tabs";
import {
  StyledDestinationContainer,
  StyledImg,
  StyledInfoBox,
  Styledline,
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
          <span>01 PICK YOUR DESTINATION</span>
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
              <h6>AVG. DISTANCE</h6>
              <p>{selectedDestination.distance}</p>
            </div>
            <div>
              <h6>EST. TRAVEL TIME</h6>
              <p>Travel Time: {selectedDestination.travelTime}</p>
            </div>
          </StyledInfoBox>
        </>
      )}
    </StyledDestinationContainer>
  );
};
export default Destination;
