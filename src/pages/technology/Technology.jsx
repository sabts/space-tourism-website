import { useState } from "react";
import { TECHNOLOGY_CONTENT } from "../../constants/technology-content";
import { TABS } from "../../constants/technology-tab";
import TabsTechnology from "../../components/tabs/Tabs-technology";
import { StyledtechnologyContainer } from "./technology-styles";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];
  const selectedTechnology = TECHNOLOGY_CONTENT[currentTab];
  //console.log(selectedDestination)
  return (
    <StyledtechnologyContainer>
      {selectedTechnology && (
        <>
          <span>01 PICK YOUR DESTINATION</span>
          <img
            src={selectedTechnology.img.mobileAndTablet}
            alt={selectedTechnology.terminology}
          />
          <TabsTechnology
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <h4>THE TERMINOLOGY…</h4>
          <h2>{selectedTechnology.terminology}</h2>
          <p>{selectedTechnology.text}</p>
        </>
      )}
    </StyledtechnologyContainer>
  );
};
export default Technology;
