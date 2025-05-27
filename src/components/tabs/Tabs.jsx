import { StyledDestinationTab, StyledTabContainer } from "./tab-styles";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTabContainer>
      {tabs.map((tab, index) => (
        <StyledDestinationTab key={tab} onClick={() => setActiveTab(index)}
        $isActive={activeTab === index}>
        {tab}
        </StyledDestinationTab>
      ))}
    </StyledTabContainer>
  );
};
export default Tabs;
