import { StyledCrewTab, StyledTabContainer } from "./tab-styles";

const TabsCrew = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTabContainer>
      {tabs.map((tab, index) => (
        <StyledCrewTab
          key={tab}
          onClick={() => setActiveTab(index)}
          $isActive={activeTab === index}
        >
          <StyledCrewTab />
        </StyledCrewTab>
      ))}
    </StyledTabContainer>
  );
};
export default TabsCrew;
