import { StyledTabContainer, StyledTechnologyTab } from "./tab-styles";

const TabsTechnology = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTabContainer>
      {tabs.map((tab, index) => (
        <StyledTechnologyTab
          key={tab}
          onClick={() => setActiveTab(index)}
          $isActive={activeTab === index}
        >
          {index + 1}
        </StyledTechnologyTab>
      ))}
    </StyledTabContainer>
  );
};
export default TabsTechnology;
