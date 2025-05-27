import { useState } from "react";
import { CREW_CONTENT } from "../../constants/crew-content";
import Tabs from "../../components/tabs/Tabs";
import { StyledCrewContainer } from "./crew-style";
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
          <span>02 MEET YOUR CREW</span>
          <h4>{selectedCrew.title}</h4>
          <h2>{selectedCrew.name}</h2>
          <p>{selectedCrew.text}</p>
          <TabsCrew
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <img src={selectedCrew.img} alt={selectedCrew.name} />
        </>
      )}
    </StyledCrewContainer>
  );
};
export default Crew;
